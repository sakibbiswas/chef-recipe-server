const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const countries = require('.//Data/Countries.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('recipe is running')
})

app.get('/countries', (req, res) => {
  res.send(countries)
})
app.listen(port, () => {
  console.log(` Recipe API is running  on port : ${port}`)
})
