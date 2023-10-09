
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
  beforeSave,
} from '@ioc:Adonis/Lucid/Orm';
import Profile from './Book';
import Skill from './Skill';
import Auth from './Auth';
import Hash from '@ioc:Adonis/Core/Hash'


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
  public password: string;

  @column()
  public email: string;

  @beforeSave()
  public static async hashPassword (auth: Auth) {
    if (auth.$dirty.password) {
      auth.password = await Hash.make(auth.password)
    }
  }
}
