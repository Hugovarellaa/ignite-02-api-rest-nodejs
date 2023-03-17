import Fastify, { FastifyInstance } from 'fastify'
import { knex } from './database'
import { env } from './env'

const server: FastifyInstance = Fastify({})

server.get('/', async () => {
	const transaction = await knex('transactions').select()

	return transaction
})

server
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
