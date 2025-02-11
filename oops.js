const user = {
    username: "shariq_alam",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details From DataBase");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
                
    
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Shariq", 12 , true)
const userTwo = new User("Shariq_alam", 24 , true)
console.log(userOne.constructor);
// console.log(userTwo);
 