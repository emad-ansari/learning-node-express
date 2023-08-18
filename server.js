const express= require('express');
const app = express();
const PORT = 8000;
const greeting = require('./index');
console.log(greeting);


const studentData = {
    'faizan': {
        'name': 'Md Faizan Khan',
        'age' : '19',
        'college': 'Galgotias University',
        'rollno': '20'
    },
    'emad': {
        'name': 'Emad',
        'age' : '21',
        'college': 'Galgotias University',
        'rollno': '25'
    },
    'abu shahma': {
        'name': 'Abu Shahma',
        'age' : '20',
        'college': 'Galgotias University',
        'rollno': '2'
    },
    'faiz rahman': {
        'name': 'Faiz Rahman',
        'age' : '20',
        'college': 'Galgotias University',
        'rollno': '40'
    },
    'unknown': {
        'name': 'unknown',
        'age' : '0',
        'college': 'unknown',
        'rollno': '0'
    }
}
app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

app.get('/app.js', (req, res)=> {
    res.sendFile(__dirname + '/app.js');
});

app.get('/api/:name', (req, res)=> {
    const studentName = req.params.name.toLowerCase();
  
    if ( studentData[studentName] ){
        res.json(studentData[studentName]);
    }else {
        res.json(studentData['unknown']);
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