const express = require('express');
const bodyParsrer = require('body-parser');

const app = express();

/*app.use((req, res, next) => {
  console.log('hello from 1st middle ware');
  next();
  /!*
   TODO:it is important to call next if you are not sending the response or else the web app will get timeout error and nothing will load in
    the client side
   *!/
});*/
app.use(bodyParsrer.json());
app.use(bodyParsrer.urlencoded({extend : false})); // not required as of now

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*'); //'http://localhost:4200'
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
  next();
})

app.post("/api/posts",(req, res, next) => {
  const post = req.body;
  console.log('post', post)
  res.status(201).json({
    message: 'Post added'
  });
})

app.get('/api/posts',(req, res, next) => {
  // res.send('Hello from express!')
  const posts = [{
    id: 'asdsadsa',
    title: 'First title from express',
    content: 'Content from server'
  }, {
    id: '1312123',
    title: 'Second title from express',
    content: 'Content from express server'
  }]
  res.status(200).json({
    message: 'posts fetched successfully',
    posts: posts
  })
});

module.exports = app;
