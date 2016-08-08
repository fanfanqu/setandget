// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let person = new Person('silence', 27);
// console.log(person.name);
// console.log(person.age);
// class Person1{
//     constructor(){}
// }
// let person1 = new Person1();
// console.log(person1);
// class Person{
//     name(name){
//         return this.name = name;
//     }
// }
// let person = new Person();
// console.log(person.name('qufan'));//name fangfa
class Person{
    constructor(name){
        this.name = name;
    }
    name(name){
        return this.name = name;
    }
}
let person = new Person();
console.log(person);
console.log(person.name);
console.log(person.name('qufan'));//name fangfa
