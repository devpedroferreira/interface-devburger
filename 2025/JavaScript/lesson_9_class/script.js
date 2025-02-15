// com a a classe agente cia a forma, o formato, o molde.

// metodo constructor



class Person {
    nome;
    age;

    talk(){
        console.log(`Hello, may name is ${this.name}`);
    }
}

const newPerson = new Person()
const newPerson1 = new Person()
const newPerson2 = new Person()
const newPerson3 = new Person()
const newPerson4 = new Person()

newPerson.name = "Pedro"
newPerson.age =  32
newPerson.talk()

// metodo constructor
class people {
    constructor (name, age){
        console.log(`Hello, im ${name}`)        
        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, may name iy ${this.name}`);
    }
}

const newPeople = new people("Carol", 28)


