// Adding new student to database

const createstudent = async ()=> {
    const Rollno = document.getElementById('student-roll').value;
    const Name = document.getElementById('student-name').value;
    const Age = document.getElementById('student-age').value;
    const College = document.getElementById('student-college').value;
    const url = "/api/addstudent";

    const studentData = {
        name: Name,
        age: Age,
        roll: Rollno,
        college: College
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        });
        if (res.ok){
            alert('details send successfully')
            console.log('Student data sent successfully');
        }
        else {
            console.error('Error sending student data');
        }


    }catch(err){
        console.log(`ERROR! ${err}`);
    }

   

}
const addBtn = document.getElementById('submit-button')
addBtn.addEventListener('click', createstudent);
