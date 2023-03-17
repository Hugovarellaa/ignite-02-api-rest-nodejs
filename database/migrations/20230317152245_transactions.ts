import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('transactions', (table) => {
		table.uuid('id').notNullable()
		table.text('title').notNullable()
		table.decimal('amount', 10, 2).notNullable()
		table.timestamp('created').defaultTo(knex.fn.now())
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('transactions')
}
