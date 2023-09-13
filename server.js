const express= require('express');
const app = express();
const path = require('path')

const PORT = 3000;

app.use('/public', express.static(path.join(__dirname, '/public')))


// using the middleware logger function inside server
// app.use(logger)
app.use(express.json())
const users = []



app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views', 'index.html'))
})

app.get('/signup', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views', 'singuppage.html'))
})

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views', 'login.html'))
})
app.post('/user', (req, res)=> {

    const newUser = {
        name: req.body.name,
        password: req.body.password 
    }
    users.push(newUser)
    res.status(201).send({msg: 'user created successfully'})
})


app.get('/user', auth, (req, res)=> {
    res.json(users)
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