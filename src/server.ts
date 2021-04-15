import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Pokedex API' })
})

app.listen(5000)
