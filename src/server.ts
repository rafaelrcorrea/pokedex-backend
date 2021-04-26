import express from 'express'
import routes from './routes'
import graphqlServer from './graphql'

const app = express()
app.use(routes)

const server = graphqlServer
server.applyMiddleware({ app })

app.listen(5000, () => console.log('SERVER RUNNING AT 5000'))
