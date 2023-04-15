import cookie from '@fastify/cookie';
import fastify from 'fastify';
import { env } from './env';
import { transactionsRoutes } from './routes/transaction.routes';

const app = fastify();

app.register(cookie);

app.register(transactionsRoutes, {
	prefix: 'transactions',
});

app
	.listen({
		port: env.PORT,
	})
	.then(() => console.log(`🚀🚀 listening on port ${env.PORT} 🚀🚀`));
