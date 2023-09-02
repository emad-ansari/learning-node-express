let studentArray = require('../../data/studentdata')
const fs = require('fs');

const studentDataBasePath = './data/studentdatabase.json'



if (fs.existsSync(studentDataBasePath)) {

    let allStudent = fs.readFileSync(studentDataBasePath,'utf-8' )
    studentArray = JSON.parse(allStudent)

}



 // below function will find that whether  aparticular student lies in database or not
const isStudentMatch = (studentName)=> {
    console.log(' this is inside is studnet function', studentName)
   
    let studentData = null;
    studentArray.forEach((student)=> {
    
        if (student.name === studentName){

            studentData = student
        }
       
    });
  
   

    const unknownStudent = {
        name: "unknown",
        age: 0,
        college: "unknown",
        roll: 0
    };
    return (studentData)? studentData : unknownStudent;
}

module.exports = isStudentMatch