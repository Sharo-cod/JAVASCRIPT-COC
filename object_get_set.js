const User = {
    _email: 'Shariq@gmail.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);
