import cookies from '@fastify/cookie'
import Fastify, { FastifyInstance } from 'fastify'
import { transactionsRoutes } from './routes/transactions.routes'

const app: FastifyInstance = Fastify()

app.register(cookies)

app.register(transactionsRoutes, {
	prefix: 'transactions',
})

export { app }
