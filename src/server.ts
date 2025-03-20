import  { fastify } from "fastify";
import { knex } from "./database";
import Crypto from 'node:crypto'

const app = fastify()


app.get('/hello', async ()=> {
const tables = await knex('sqlite_schema').select('*')

return tables

})

app.post('/users', async ()=> {
  const newUser = await knex.insert(
    {
      id:Crypto.randomUUID(),
      name: String,
      email: String
    }
  ) 
})


app.listen({
  port:3333
}).then(() => {
  console.log('Http Server Running!')
})