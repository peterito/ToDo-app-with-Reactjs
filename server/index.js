
const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.get('/todos',(req, res) =>{
    const todos = [
      {
        done: false,
        name: 'Wake up by 6am'
    },
    {
        done: false,
        name: 'pray'
    },
    {
        done: false,
        name: 'Go to gym'
    },
    {
        done: false,
        name: 'Eat by 9am'
    },
    {
        done: false,
        name: 'Go for movie by 12noon'
    },
    {
        done: false,
        name: 'meeting with a friend'
    },
    ];
    res.json(todos);
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})