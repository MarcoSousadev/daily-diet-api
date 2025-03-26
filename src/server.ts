import  { fastify } from "fastify";
import { knex } from "./database";
import { z } from 'zod'
import { registerRoutes } from './routes/register'

const app = fastify()

app.register(registerRoutes)



// app.post('/users', async () => {
//   const newUser = await knex.insert({
//     id: z.number(),
//     name: z.string(),
//     email: z.string()
//   })
//   return 
// })


app.listen({
  port:3333
}).then(() => {
  console.log('Http Server Running!')
})