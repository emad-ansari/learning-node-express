
const sumbitSignUPDetails = async (e)=> {
  
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = {
        name,
        email,
        password
    }
    
    try {
        const res = await fetch('/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (res.ok){
            alert('your account has been created')
        }
        else {
            alert('ERROR!!!')
        }
    }
    catch(err){
        console.log(err)
    }
    

}

const singUPButton = document.getElementById('create-account-btn')
singUPButton.addEventListener('click', sumbitSignUPDetails)