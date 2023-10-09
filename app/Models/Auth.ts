
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Auth extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  // @column()
  // public rememberMeToken: string | null

  @beforeSave()
  public static async hashPassword (auth: Auth) {
    if (auth.$dirty.password) {
      auth.password = await Hash.make(auth.password)
    }
  }
}
