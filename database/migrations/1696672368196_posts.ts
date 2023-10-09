import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 80)
      table.string('tag', 80)
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
    })
  }
}


