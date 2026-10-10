// Problem 1: Create objects with a class
// Create the Car class here
class Car{
    constructor(brand){
        this.brand = brand
    }
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");

console.log(car1);
console.log(car2);

// Problem 2: Create objects with a class that takes multiple parameters
// Create the Book class here
class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

const book1 = new Book("Laskar Pelangi", "Andrea Hirata");
const book2 = new Book("Bumi", "Tere Liye");

console.log(book1);
console.log(book2);

// Problem 3: Create objects with a class that includes a method
// Create the Animal class here
class Animal{
    constructor(name, type){
        this.name = name
        this.type = type
        this.introduce = function(){
            console.log(`${name} is a ${type}`)
        }
    }
}

const animal1 = new Animal("Milo", "Cat");
const animal2 = new Animal("Luna", "Rabbit");

animal1.introduce();
animal2.introduce();