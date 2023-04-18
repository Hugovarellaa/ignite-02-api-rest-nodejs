import cookie from '@fastify/cookie';
import fastify from 'fastify';
import { transactionsRoutes } from './routes/transaction.routes';

export const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
	prefix: 'transactions',
});
