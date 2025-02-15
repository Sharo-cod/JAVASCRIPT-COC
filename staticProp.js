class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const shariq = new User("Shariq Alam")
// console.log(shariq.createId())


class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iPhone" , "i@gmail.com") 
console.log(iphone.createId());