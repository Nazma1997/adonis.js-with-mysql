import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Books from 'App/Models/Book';
import User from 'App/Models/User';


export default class BooksController {

  public async index({ response }: HttpContextContract) {
    const books = await Books.all();
    return response.status(200).json(books)
  }

  public async create({ request, response }: HttpContextContract) {

    try {
      const data = request.only(['user_id', 'book_name'])
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

  public async update({ params, request, response }) {

    try {

      const book = await Books.findOrFail(params.id)
      const data = request.only(['user_id', 'book_name'])

      // this code  isn't working 
      const bookId = await Books.findBy('id', data.id)
      if (!bookId) {
        return response.status(404).json({ message: `Book can't find` })
      }

      //
      const userId = await Books.findBy('user_id', data.user_id)

      if (!userId) {
        return response.status(404).json({ message: ` User Id isn't correct` })
      }

      book.merge(data)
      await book.save()

      return response.status(200).json({ message: 'updated Book', book })
    } catch (error) {
      return response.status(500).json({ messgae: 'Internal server error' })
    }
  }

  public async delete({params, response}){
     try {
      
      const book = await Books.findOrFail(params.id)
      await book.delete()

      return response.status(204).json({message: 'Book deleted', book})

     } catch (error) {
      return response.status(500).json({message: `Internal server error`})
     }
  }


}
