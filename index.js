const express = require('express')
const app = express()
const port = 5000
const path=require('path')

// custome Middleware
// const arnabmiddleware=(req,res,next)=>{
// console.log(req);
// next();


// }

app.use(express.static(path.join(__dirname,'public')))
// app.use(arnabmiddleware)


app.get('/home/:name', (req, res) => {
  res.send('Hello World!'+req.params.name)
})

//   app.get('/About', (req, res) => {
//  res.sendFile(path.join(__dirname,'index.html'))
// //  res.status(500)
// res.json({"harry":34})
//   })



app.get('/About', (req, res) => {
  res.send('Hello World! this is mu about')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})