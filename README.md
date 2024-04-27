# NLW Unite - pass.in API (Node.js)

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

O NLW é uma iniciativa da [Rocketseat](https://github.com/Rocketseat).

[Especificações](https://efficient-sloth-d85.notion.site/Especifica-es-bf6c0178596044f5903bb6797b112660)

[Material complementar](https://efficient-sloth-d85.notion.site/Node-js-a51a784e58e8482daa4c188b1659f5df)

[Documentation](http://localhost:3333/docs)

## Desenvolvimento
`npm run dev`

## Dados
Esse projeto usa Prisma.
O comando abaixo executa um reset seguido de seed.
Os dados são gerados através do Faker js em [prisma/data.ts](https://github.com/AleferReinert/pass.in-nodejs/blob/main/prisma/data.ts).

`npm run db:migrate` 

## Deploy
Projeto hospedado na [Vercel](https://vercel.com/) e banco de dados na [Neon](https://console.neon.tech).