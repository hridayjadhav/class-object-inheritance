class person{           // definition of a class named person.
    constructor(name, age, cls){    
        this.myName = name;
        this.myAge = age;
        this.myCls = cls;

    }

    data() {
        console.log(`My name is ${this.myName}, My age is ${this.myAge} and I am studying in ${this.myCls}`);
    }

}

class Student extends person{           // a class named Student that extends (inherits from) the person class.
    constructor(name, age, cls, hobby){
        super(name, age, cls);          //The super keyword is used to call the constructor of the parent class and access its methods and properties.
        this.myHobby = hobby; 

    }
    addOn(){
        console.log(`My hobby is ${this.myHobby}`)
    }
}

const person1 = new person('Hriday', 21, 'SE');
const person2 = new person('Harshal', 21, 'BCCA');
const hob = new Student('Hriday', 21, 'SE', 'Football');

person1.data();
person2.data();
hob.data();
hob.addOn();