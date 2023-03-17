import Fastify, { FastifyInstance } from 'fastify'
import { knex } from './database'

const server: FastifyInstance = Fastify({})

server.get('/', async () => {
	const transaction = await knex('transactions').select()

	return transaction
})

server
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
