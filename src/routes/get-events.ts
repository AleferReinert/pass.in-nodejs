import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { BadRequest } from './_errors/bad-request';

export async function getEvents(app: FastifyInstance) {
     app.withTypeProvider<ZodTypeProvider>()
     .get('/events', {
        schema: {
            summary: 'Retorna todos eventos',
            tags: ['eventos'],
            response: {
                200: z.object({
                    events: z.array(
                        z.object({
                            id: z.string().uuid(),
                            title: z.string(),
                            slug: z.string(),
                            details: z.string().nullable(),
                            maximumAttendees: z.number().int().nullable(),
                        })
                    )
                })
            }
        }
     }, async (request, reply) => {
        const events = await prisma.event.findMany({
            // Retorna apenas os seguintes campos
            select: {
                id: true,
                title: true,
                slug: true,
                details: true,
                maximumAttendees: true
            }
        })

        if(events === null) {
            throw new BadRequest("Events not found")
        }

        return reply.send({ 
            events: events.map(event => {
                return {
                    id: event.id,
                    title: event.title,
                    details: event.details,
                    slug: event.slug,
                    maximumAttendees: event.maximumAttendees
                }
            })
         })
     })
}