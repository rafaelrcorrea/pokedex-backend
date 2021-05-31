import express from 'express'
import routes from './routes'
import graphqlServer from './graphql'

const app = express()
app.use(routes)

const server = graphqlServer
server.applyMiddleware({ app })

const PORT = (process.env.PORT || 5000)
app.listen(PORT, () => console.log(`SERVER RUNNING AT ${PORT}`))
