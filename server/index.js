const express = require('express')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

const cart = [{
  id: '1',
  item: 'red',
  qty: 2
}, {
  id: '2',
  item: 'blue',
  qty: 5
}, {
  id: '3',
  item: 'yellow',
  qty: 8
}]
const app = express()

app.get('/cart', (req, res) => {
  res.status(200).type('json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(cart)
})

app.listen(PORT, () => {
  console.log(`App listening on ${PORT} on ${new Date()}`)
})
