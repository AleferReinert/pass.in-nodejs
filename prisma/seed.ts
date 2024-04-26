import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '7f968e71-187e-469e-95b1-dc861048194d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por códigos.',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded.')

    prisma.$disconnect()
})