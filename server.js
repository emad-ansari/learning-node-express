const express= require('express');
const app = express();
const path = require('path')
const PORT = 3000;

// using the middleware logger function inside server
// app.use(logger)


app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/index.html'))
})




app.get('/user', auth, (req, res)=> {
    res.send('USERS PAGE')
})

// express middleware example 
function logger(req, res, next){
    console.log(new Date)
    next()
}

// authentication middleware
function auth (req, res, next){
    console.log('this is my authentication middleware')
    next()
}





app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));