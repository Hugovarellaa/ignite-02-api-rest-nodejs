import Fastify, { FastifyInstance } from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions.routes'

const server: FastifyInstance = Fastify({})

server.register(transactionsRoutes)

server
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
