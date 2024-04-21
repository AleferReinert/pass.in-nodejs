import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';
import { prisma } from '../lib/prisma';
import { BadRequest } from './_errors/bad-request';

export async function registerForEvent(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>()
    .post('/events/:eventId/attendees', {
        schema: {
            summary: 'Registra um participante no evento',
            tags: ['participantes'],
            body: z.object({
                name: z.string().min(4),
                email: z.string().email()
            }),
            params: z.object({
                eventId: z.string().uuid()
            }),
            response: {
                201: z.object({
                    attendeeId: z.number().positive().gte(4)
                })
            }
        }
    }, async (request, reply) => {
        const {eventId} = request.params
        const {name, email} = request.body
        
        // Executa simultaneamente para melhorar a performance
        const [event, amountOfAttendessForEvent] = await Promise.all([
            prisma.event.findUnique({
                where: {
                    id: eventId
                }
            }),
            prisma.attendee.count({
                where: {
                    eventId
                }
            })
        ])

        // Verifica se o e-mail já está registrado no evento específico
        const attendeeFromEmail = await prisma.attendee.findUnique({
            where: {
                eventId_email: {
                    email,
                    eventId
                }
            }
        })

        if(attendeeFromEmail !== null) {
            throw new BadRequest("This e-mail is already registered on this event.")
        }

        // Verifica se não atingiu o limite de participantes antes de criar
        if(event?.maximumAttendees && amountOfAttendessForEvent >= event?.maximumAttendees) {
            throw new BadRequest('Te maximum number of attendees for this event has been reached')
        }

        // Cria o participante
        const attendee = await prisma.attendee.create({
            data: {
                name,
                email,
                eventId
            }
        })

        return reply.status(201).send({attendeeId: attendee.id})
    })
}