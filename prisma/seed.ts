import { prisma } from '../src/lib/prisma'
import { faker } from '@faker-js/faker'
import { generateSlug } from '../src/utils/generate-slug'

interface Attendee {
    name: string
    email: string
    eventId: string
}

// Gera participantes fictícios para o NLW Unite
const idNlwUnite = faker.string.uuid()
const attendeesNlwUnite: Attendee[] = []
for (let i = 0; i < 10; i++) {
    const attendee = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId: idNlwUnite
    }
    attendeesNlwUnite.push(attendee);
}

async function seed() {

    // Cria eventos no banco de dados
    await prisma.event.createMany({
        data: [
            {
                id: idNlwUnite,
                title: 'NLW Unite',
                slug: generateSlug(this.title),
                details: 'Desafie-se em uma nova tecnologia criando um projeto completo em 3 aulas.',
                maximumAttendees: 100
            },
            // {
            //     id: eventId2,
            //     title: 'Reactathon',
            //     slug: generateSlug(this.title),
            //     details: 'Hackathon de 24h para criar projetos inovadores com React.js.',
            //     maximumAttendees: 50
            // },
            // {
            //     id: eventId3,
            //     title: 'Workshop Vue.js',
            //     slug: generateSlug(this.title),
            //     details: 'Domine interfaces dinâmicas com Vue.js neste workshop prático.',
            //     maximumAttendees: 80
            // }
        ]
    })

    await prisma.attendee.createMany({
        data: attendeesNlwUnite
    })
}

seed().then(() => {
    console.log('Database seeded.')

    prisma.$disconnect()
})