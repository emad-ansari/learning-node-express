const express= require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
const path = require('path');
const findStudent = require('./public/js/searchStudent')
const studentdatabase = require('./data/studentdata')
// console.log(studentdatabase)


app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/api/:name', (req, res)=> {
    
    const studentName = req.params.name.toLowerCase();
    if (studentName === 'all'){
        // respond with all student 
        res.json(studentdatabase)
    }
    else {
        // respond for a asking student
        const studentObject = findStudent(studentName)
        res.json(studentObject)
    }
 
});

app.post('/api/addstudent', (req, res)=> {
    const newStudentData = req.body;
    console.log(newStudentData)

    studentdatabase.push(newStudentData)
    res.status(200).send('Student data received');
});

app.delete('/api/deletestudent', (req, res)=> {
    const student_roll = req.body.student_roll;
    console.log( "I get the student roll to delete", student_roll)
    res.status(200).json({message: 'student deleted successfully'})
    
})


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));