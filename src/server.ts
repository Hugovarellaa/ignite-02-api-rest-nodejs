import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Ola mundo!!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running in port 3333");
  });
