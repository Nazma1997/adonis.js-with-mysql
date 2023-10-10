import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Models/Auth'





export default class AuthController {

    public async register({request, response }: HttpContextContract) {

        try {
            const userData = request.only(['name', 'email', 'password'])

            const existingUser = await Auth.findBy('email', userData.email)

            if (existingUser) {
                return response.status(400).json({ message: 'Email already used' })
            }
            const user = await Auth.create(userData)
            return response.status(201).json(user)

           
            
        } catch (error) {
            return response.status(400).json({ message: 'invalid data' })
        }
    }

    public async login({ auth, request, response }) {
        try {
            const email = request.input('email')
            const password = request.input('password')
            await auth.use('web').attempt(email, password)

            return response.status(201).json({ message: 'User Logged' })
        } catch (error) {
            console.log('error', error)
            return response.status(500).json(error)
        }
    }
}