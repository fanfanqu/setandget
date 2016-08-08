class Calculate{
    constructor(length) {
        this.length = length;
    }

     area() {
        return this.length * 9;
    }
    get perimeter(){
        return this.length*4;
    }
    name(){
        return 'hello!'
    }
    name1(length){
        return length*2;
    }
}
let square = new Calculate(5);
console.log(square);//Calculate { length: 5 }
console.log(square.length); //5
console.log(square.area()+'.....'); //45
console.log(square.name); //  [Function: name]
console.log(square.name1);//[Function: name1]
console.log(square.name1(2));//4
console.log(square.name());//hello!
console.log(square.perimeter);//20
console.log(square.name1());//NaN
console.log(square.perimeter()); // square.perimeter is not a function
