import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Posts from 'App/Models/Posts'

export default class PostsController {

    public async index({response}: HttpContextContract){
        const all_post = await Posts.all();
        return  response.status(200).json({message: 'All post', all_post})
    }


    public  async create({request, response}: HttpContextContract){

        try {
            const data = request.only(['user_id', 'name', 'tag'])
            const post = await Posts.create(data)
            return response.status(201).json({message: 'post created', post})
        } catch (error) {
            return response.status(400).json({message: 'invalid data'})
        }
    }

    public async update({params, request, response}){
        try {
           const post = await Posts.findOrFail(params.id)
           const data = request.only(['user_id', 'name', 'tag'])
           post.merge(data)
           await post.save()

           return response.status(200).json({message:'Updated post', post})
        } catch (error) {
            return response.status(404).json({message: 'invalid data'})
        }
    }

    public async delete({params, response }){
        try {
            const post = await Posts.findOrFail(params.id)
            await post.delete()

            return response.status(204).json({message:'post deleted', post})
        } catch (error) {
            return response.status(404).json({message: 'post not found'})
        }
    }
}
