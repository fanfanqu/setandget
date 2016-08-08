class Person {
    static name() {
        return 'hello!';
    }
    speak(){
        return 'hello,world';
    }
}
console.log(Person.name());//hello!
console.log(Person.speak());//Person.speak is not a function

let person = new Person();
console.log(person.speak());//hello,world
console.log(person.name());//person.name is not a function

