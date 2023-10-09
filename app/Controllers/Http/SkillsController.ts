import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Skill from 'App/Models/Skill'



export default class SkillsController {


    public async index({ response }: HttpContextContract) {
        const skills = await Skill.all();
        return response.status(200).json(skills)
    }

    

    public async create({ request, response }: HttpContextContract) {
        const { skill_name, users } = request.only(['skill_name', 'users'])
        const skill = new Skill()
        skill.skill_name = skill_name
        await skill.save()
        if (users && users.length > 0) {
            await skill.related('users').attach(users)
        }
    

        console.log('data', skill )
        return response.status(201).json({ message: 'created skill', skill })
    }
}