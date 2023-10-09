
import Post from './Posts';

import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  hasOne, 
  HasOne
} from '@ioc:Adonis/Lucid/Orm';
import Profile from './Book';

export default class User extends BaseModel {
  @hasMany(() => Post, {
    foreignKey: 'user_id' 
  })
  public posts: HasMany<typeof Post>;

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;
}
