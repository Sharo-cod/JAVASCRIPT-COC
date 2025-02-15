// // After ES6

// class User {
//     constructor(username, email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const data = new User("Shariq" , "shariq@gmail.com", "123")

// console.log(data.encryptPassword());
// console.log(data.changeUserName());



// Behind The Scenes

function User(username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
}

const tea = new User("tea" , "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());