import fastify from "fastify";

const PORT = 3333;

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("listening on port", PORT));
