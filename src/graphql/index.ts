import fs from 'fs'
import path from 'path'

import { ApolloServer, gql } from 'apollo-server-express'
import resolvers from './resolvers'

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'))

export default new ApolloServer({
  typeDefs: gql(typeDefs.toString()),
  resolvers
})
