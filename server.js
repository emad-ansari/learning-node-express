const express= require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 3000;
const fs  = require('fs')
const findStudent = require('./public/js/searchStudent')
let studentdatabase = require('./data/studentdata')



app.use(express.static('public'))
app.use(bodyParser.json())

const studentDataBasePath = __dirname + '/data/studentdatabase.json'

if (fs.existsSync(studentDataBasePath)){
    const fileData = fs.readFileSync(studentDataBasePath, 'utf-8')
    // console.log('this is type of file data ',typeof fileData)
    studentdatabase = JSON.parse(fileData)
}


app.post('/api/addstudent', (req, res)=> {
    const newStudentData = req.body;
    // console.log('student data recieved: ', newStudentData)
    studentdatabase.push(newStudentData)
    // update the studentDataBase json file 
    const formattData =  JSON.stringify(studentdatabase, null, '\n')
    fs.writeFileSync(studentDataBasePath, formattData)
    console.log('updated student database:  ',studentdatabase)
    res.status(200).send('Student data received');
});


app.get('/api/:name', (req, res)=> {
    
    let studentName = req.params.name;
    // make the first character to uppercase
    studentName = studentName.charAt(0).toUpperCase() + studentName.slice(1);
    
    if (studentName === 'All'){
        // respond with all student 
        res.status(200).json(studentdatabase)
    }
    else {
        // respond for a asking student
       
        const studentObject = findStudent(studentName)

        res.status(200).json(studentObject)
    }
 
});



app.delete('/api/deletestudent', (req, res)=> {
    const student_roll = req.body.student_roll;
    console.log( "I get the student roll to delete", student_roll)
    res.status(200).json({message: 'student deleted successfully'})
    
})


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));