import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'



export default class UsersController {

    public async index({ response }: HttpContextContract) {
        const all_user = await User.all();
        return response.status(200).json({ message: 'All user', all_user })
    }

    public async create({ request, response }: HttpContextContract) {
        try {
            const userData = request.only(['name', 'email'])
            const user = await User.create(userData)
            return response.status(201).json(user)
        } catch (error) {
            return response.status(400).json({ message: 'invalid data' })
        }
    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
            const user = await User.findOrFail(params.id)
            const userData = request.only(['name', 'email'])
            user.merge(userData)
            await user.save()
            return response.status(200).json(user)
        } catch (error) {
            return response.status(404).json({ message: 'User not found' })

        }
    }

    public async delete({ params, response }) {
        try {
            const user = await User.findOrFail(params.id)
            await user.delete()
            return response.status(204).json({ message: 'User deleted successfully', user })
        } catch (error) {
            return response.status(404).json({ message: 'User not found' })
        }
    }

    // public async user({ params, response }) {
    //     const user = await User.find(params.id);
    //     if (!user) {
    //         return response.status(404).json({ message: 'User not found' });
    //     }
    //     const userPosts = await user.posts().fetch();
    //     return response.status(200).json({ user, posts: userPosts });
    // }


}


