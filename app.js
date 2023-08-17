// fetch the student details from serrver

// console.log('hello');

const myBtn = document.getElementById('searchBtn');
myBtn.addEventListener('click', fetchData);
async function fetchData(){
    const inputName = document.querySelector('input').value;
    const url = `/api/${inputName}`;
    const res = await fetch (url);
    const data = await res.json();
    showDetails(data);
   
}
const showDetails = (data)=> {
    const container = document.querySelector('div');
    const Name = document.createElement('h4');
    const Age = document.createElement('h4');
    const College = document.createElement('h4');
    const Roll = document.createElement('h4');
    Name.innerText = 'Name: ' + data.name;
    Age.innerText = 'Age: ' + data.age;
    College.innerText = 'College: ' + data.college;
    Roll.innerText = 'Roll no: ' + data.rollno;
    container.append(Name, Age, College, Roll);
    document.querySelector('input').value = '';
}