import Fastify, { FastifyInstance } from 'fastify'

const server: FastifyInstance = Fastify({})

server.get('/', () => {
	return 'Primeiro test'
})

server
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
