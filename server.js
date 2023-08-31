const express= require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const findStudent = require('./public/js/searchStudent')
const allStudents = require('./data/studentdata')



app.use(express.static('public'))


app.get('/api/:name', (req, res)=> {
    
    const studentName = req.params.name.toLowerCase();
    if (studentName === 'all'){
        // respond with all student 
        res.json(allStudents)
    }
    else {
        // respond for a asking student
        const studentObject = findStudent(studentName)
        res.json(studentObject)
    }
 
});

app.post('/addNewStudent', (req, res)=> {
    // console.log('post request send')
    // console.log(req);
});

app.delete('/user/deleteSomething', (req, res)=> {
    res.send('delete request successfully');
})

app.put('/user/putSomething', (req, res)=> {
    res.send('put request successfully');
})
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));