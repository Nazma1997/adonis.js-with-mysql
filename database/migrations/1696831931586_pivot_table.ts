import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pivot_table'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id')
      table.integer('skill_id').unsigned().references('skills.id')
      table.unique(['user_id', 'skill_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
