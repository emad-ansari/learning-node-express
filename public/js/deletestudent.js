

const openPopup = document.getElementById('delete');

openPopup.addEventListener('click', deletePopup)
function deletePopup(){
    const deleteContainer = document.getElementById('delete-popup');
    deleteContainer.style.display = 'block';
}


const closeBtn = document.getElementById('cross-btn');
closeBtn.addEventListener('click', closeDeletePopup);

function closeDeletePopup() {
    const deleteContainer = document.getElementById('delete-popup');
    deleteContainer.style.display = 'none';
}


const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', deleteStudent);

async function deleteStudent() {
    const student_roll = document.getElementById('roll-input').value;
    const url = '/api/deletestudent';
    try {
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({student_roll})
        })
        if (res.ok){
            alert('student delete successfully');
        }
        else {
            alert(res.status);
        }
      
    }catch(err){
        console.log(`Error!! ${err}`);
    }

}