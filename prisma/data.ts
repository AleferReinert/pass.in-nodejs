import { faker } from '@faker-js/faker'

// Esse arquivo gera dados fictícios para popular o banco de dados.

interface Attendee {
    name: string
    email: string
    eventId: string
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
    maximumAttendees: 50
}

const eventWorkshopVueJs = {
    id: faker.string.uuid(),
    title: 'Workshop Vue.js',
    slug: 'workshop-vue-js',
    details: 'Domine interfaces dinâmicas com Vue.js neste workshop prático.',
    maximumAttendees: 80
}

// Exporta os dados
export const allEvents = [eventNlwUnite, eventReactathon, eventWorkshopVueJs]
export const allAttendees: Attendee[] = []

// Participantes de cada evento
for (let i = 0; i < 45; i++) {
    const attendee = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId: eventNlwUnite.id
    }
    allAttendees.push(attendee);
}

for (let i = 0; i < 10; i++) {
    const attendee = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId: eventReactathon.id
    }
    allAttendees.push(attendee);
}

for (let i = 0; i < 18; i++) {
    const attendee = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        eventId: eventWorkshopVueJs.id
    }
    allAttendees.push(attendee);
}