
import { type Knex, knex  as setupKnex }  from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL){
  throw new Error ('Database URL not found')
}

export const config: Knex.Config ={
  client: 'sqlite',
  connection: {
    filename:env.DATABASE_URL
  },  
  migrations: {
    extension:'ts',
    directory: './db/migrations'
  },
  useNullAsDefault: true,
}



export const knex = setupKnex(config)
