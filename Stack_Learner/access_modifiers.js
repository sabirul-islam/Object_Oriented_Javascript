class Person{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    changeName(newName){
        this.name = newName
    }

    sendingEmail(msg){
        console.log('To', this.email);
        console.log('sending message');
        console.log('sending', msg);
    }

    print(){
        console.log(this);
    }

    arrow = (email) => {
        this.email= email
    }
}

const p1 = new Person("sabirul", "sabirul.shimul@gmail.com")
const p2 = new Person("shimul", "aborzona@gmail.com")
p2.changeName('shumit')
p1.sendingEmail('heloo')

p2.print()
p1.arrow('test@email.com')

// console.log(p1);
// console.log(p2);
