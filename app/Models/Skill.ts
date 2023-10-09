
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User';

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @manyToMany(() => User, {
    pivotTable: 'pivot_table',
    pivotForeignKey: 'skill_id',
    pivotRelatedForeignKey: 'user_id',
  })
  public users: ManyToMany<typeof User>;
 

  @column()
  public skill_name: string

}
