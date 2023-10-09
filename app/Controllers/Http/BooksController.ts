import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Books from 'App/Models/Book';


export default class BooksController {

    public async index({response}: HttpContextContract){
        const books = await Books.all();
        return  response.status(200).json(books)
    }

    public  async create({request, response}: HttpContextContract){

        try {
            const data = request.only(['user_id', 'book_name'])
        
            // Check if a book with the same user_id already exists
            const existingBook = await Books.findBy('user_id', data.user_id)
        
            if (existingBook) {
              return response.status(400).json({ message: 'User ID already used' })
            }
        
            const book = await Books.create(data)
            return response.status(201).json(book)
          } catch (error) {
            return response.status(400).json({ message: 'Invalid data' })
          }
    }

    
}
