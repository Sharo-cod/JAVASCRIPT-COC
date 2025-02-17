class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }

    get password(){
        return `${this._password} Shariq`
    }

    set password(val){
        this._password = val
    }

}

const shariq = new User("shariq@gmail.com", "abc")
console.log(shariq.password);
console.log(shariq.email);
