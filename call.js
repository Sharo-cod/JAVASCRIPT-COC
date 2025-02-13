function setUsername(username){
    //Complex DB calls 
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this,username)
    
    this.email = email
    this.password = password
}

const  Shariq = new createUser("Shariq" ,"Shariq@gmail.com","132" )
console.log(Shariq);
