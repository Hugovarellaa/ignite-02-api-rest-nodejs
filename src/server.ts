import cookies from '@fastify/cookie'
import Fastify, { FastifyInstance } from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions.routes'

const server: FastifyInstance = Fastify()

server.register(cookies)

server.register(transactionsRoutes, {
	prefix: 'transactions',
})

server
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
