
import Post from './Posts';

import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  hasOne, 
  HasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm';
import Profile from './Book';
import Skill from './Skill';

export default class User extends BaseModel {
  @hasMany(() => Post, {
    foreignKey: 'user_id' 
  })
  public posts: HasMany<typeof Post>;

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @manyToMany(() => Skill, {
    pivotTable: 'pivot_table',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'skill_id',
  })
  public skills: ManyToMany<typeof Skill>;
 


  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;
}
