import { app } from './app'
import { env } from './env'

app
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log('server listening on port  33333 🚀🚀🚀')
	})
