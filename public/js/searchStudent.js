const studentArray = require('../../data/studentdata')
 // below function will find that whether  aparticular student lies in database or not
const isStudentMatch = (studentName)=> {
    let studentData = null;
    studentArray.forEach((student)=> {
        if (student.name === studentName){
            studentData = student;
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