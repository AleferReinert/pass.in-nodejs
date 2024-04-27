import { prisma } from '../src/lib/prisma'
import { allEvents, allAttendees, allCheckIns } from './data'

async function seed() {

    // Cria eventos
    await prisma.event.createMany({
        data: allEvents
    })

    // Cria participantes
    await prisma.attendee.createMany({
        data: allAttendees
    })
        
    await prisma.checkIn.createMany({
        data: allCheckIns
    })
}

seed().then(() => {
    console.log('Database seeded.')
    prisma.$disconnect()
})