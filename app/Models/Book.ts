
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Books extends BaseModel {
  @column({ isPrimary: true })
  public id: number

 
  @column()
  public book_name: string;

  
  @column()
  public user_id: string;
}
