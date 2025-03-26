import type { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { register } from 'node:module'
import { error } from 'node:console'


export async function registerRoutes(app: FastifyInstance) {
  app.post('/users', async (request, reply)=> { 

    const createRegisterBodySchema = z.object({
      name: z.string(),
      email: z.string()
    })
   const { name, email} = createRegisterBodySchema.parse(request.body)
    
    
   const registerUser = await knex('users').insert({
    user_id:randomUUID(),
    user_name: name,
    user_email: email,
  }) 

  return reply.send(201)

  })

  app.post('/meal', async (request, reply)=> { 
  
      const createRegisterMealBodySchema = z.object({
        
        name: z.string(),
        description: z.string(),
        time: z.number(),
        diet: z.boolean(),
  
      })

     const { name, description, time, diet } = createRegisterMealBodySchema.parse(request.body)
      
     const  user  = await knex('users').where({ user_id:'user_id'}).first()

    //  if (!user){
    //   throw new Error('user not found')
    //  }
      
     const registerMeal = await knex('meal_info').insert({
      id:randomUUID(),
      meal_name: name,
      meal_description: description,
      meal_created_at: time,
      meal_diet: diet,
      user_id: user
  
    }) 
  
    return reply.send(201)
  
    })

    app.get('/meal', async ()=> {

      const tables = await knex('meal_info').select('*')

      return tables

    })
    
   } 
  
 