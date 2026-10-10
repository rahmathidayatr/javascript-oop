// Problem 1: Create objects with a constructor function
// Create the constructor function here
function Car(brand){
    this.brand = brand
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");

console.log(car1);
console.log(car2);

// Problem 2: Create objects with a constructor function that takes multiple parameters
// Create the constructor function here
function Student(name, major){
    this.name = name
    this.major = major
}

const student1 = new Student("Budi", "TI");
const student2 = new Student("Andi", "SI");

console.log(student1);
console.log(student2);

// Problem 3: Create objects with a constructor function that includes a method
// Create the constructor function here
function Animal(name, type){
    this.name = name
    this.type = type
    this.introduce = function(){
        console.log(`${name} is a ${type}`)
    }
}

const animal1 = new Animal("Milo", "Cat");
const animal2 = new Animal("Luna", "Rabbit");

animal1.introduce();
animal2.introduce();