const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const countries = require('.//Data/Countries.json')
const chefdata = require('.//Data/chefdata.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('recipe is running..')
})

app.get('/countries', (req, res) => {
  res.send(countries)
})
app.get('/countries/:id', (req, res) => {
    const id =parseInt (req.params.id);
    if (id === 0) {
       res.send(chefdata) 
    }
    else {
          const countrydata=chefdata.filter(c=>parseInt(c.category_id)===id)
  res.send(countrydata)  
    }

})
app.get('/chef', (req, res) => {
   res.send(chefdata)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectechefdata = chefdata.find(c => c._id === id)
    res.send(selectechefdata)
})
app.listen(port, () => {
  console.log(` Recipe API is running  on port : ${port}`)
})
