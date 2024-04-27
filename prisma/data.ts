import { faker } from '@faker-js/faker'

// Esse arquivo gera dados fictícios para popular o banco de dados.
interface AttendeeProps {
    id: number
    name: string
    email: string
    eventId: string
}

interface CheckInProps {
    attendeeId: number
}

// Eventos
const eventNlwUnite = {
    id: faker.string.uuid(),
    title: 'NLW Unite',
    slug: 'nlw-unite',
    details: 'Desafie-se em uma nova tecnologia criando um projeto completo em 3 aulas.',
    maximumAttendees: 100
}

const eventReactathon = {
    id: faker.string.uuid(),
    title: 'Reactathon',
    slug: 'reactathon',
    details: 'Hackathon de 24h para criar projetos inovadores com React.js.',
    maximumAttendees: 100
}

const eventWorkshopVueJs = {
    id: faker.string.uuid(),
    title: 'Workshop Vue.js',
    slug: 'workshop-vue-js',
    details: 'Domine interfaces dinâmicas com Vue.js neste workshop prático.',
    maximumAttendees: 100
}

export const allEvents = [eventNlwUnite, eventReactathon, eventWorkshopVueJs]


// Participantes
export const allAttendees: AttendeeProps[] = []

// Escolhe um evento aleatório para registrar o participante
function randomEventId() {
  const eventIds = [eventNlwUnite.id, eventReactathon.id, eventWorkshopVueJs.id]
  const randomIndex = Math.floor(Math.random() * eventIds.length)

  return eventIds[randomIndex]
}

for (let i = 1; i <= 228; i++) {
    const attendee = {
        id: i,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId: randomEventId()
    }
    allAttendees.push(attendee);
}

// Check-ins aleatórios
export const allCheckIns: CheckInProps[] = []

for (let i = 0; i < allAttendees.length; i++) {
    const randomBoolean = faker.datatype.boolean()
    const id = allAttendees[i].id
    
    if(randomBoolean) {
        allCheckIns.push({attendeeId: id})
    }
}