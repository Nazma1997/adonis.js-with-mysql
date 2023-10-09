/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/




import Route from '@ioc:Adonis/Core/Route'







Route.get('/', async () => {
  return { hello: 'world' }
})



// user routes end point
Route.get('/users', 'Http/UsersController.index') 
Route.post('/users', 'Http/UsersController.create' )
Route.patch('/users/:id/edit', 'Http/UsersController.update' )
Route.delete('/users/:id/delete', 'Http/UsersController.delete' )
Route.get('/users/user/:id', 'Http/UsersController.user')



//post route end point
Route.get('/posts', 'Http/PostsController.index')
Route.post('/posts' ,'Http/PostsController.create')
Route.patch('/posts/:id/edit', 'Http/PostsController.update' )
Route.delete('/posts/:id/delete', 'Http/PostsController.delete' )

// book route endpoint 
Route.get('/books', 'Http/BooksController.index')
Route.post('/books', 'Http/BooksController.create' )
