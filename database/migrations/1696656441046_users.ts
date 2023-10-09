import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.string('email', 80).notNullable().unique()
     
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
