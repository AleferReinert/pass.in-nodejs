import { prisma } from '../src/lib/prisma'
import { allEvents, allAttendees } from './data'

async function seed() {
    await prisma.event.createMany({
        data: allEvents
    })

    await prisma.attendee.createMany({
        data: allAttendees
    })
}

seed().then(() => {
    console.log('Database seeded.')

    prisma.$disconnect()
})