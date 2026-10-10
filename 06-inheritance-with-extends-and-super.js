// Problem 1: Inherit a method from a parent class with extends
class Animal {
    makeSound() {
        console.log("The animal makes a sound");
    }
}

// Create the Cat class here
class Cat extends Animal {}

const cat1 = new Cat();
cat1.makeSound();

// Problem 2: Call the parent constructor with super()
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Create the Child class here
class Child extends Person {
    constructor(name, age){
        super(name)
        this.age = age
    }
}


const child1 = new Child("Budi", 10);

console.log(child1.name);
console.log(child1.age);

// Problem 3: Extend a parent class with additional properties
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

// Create the Car class here
class Car extends Vehicle {
    constructor(brand, color){
        super(brand)
        this.color = color
    }
}


const car1 = new Car("Toyota", "Black");

console.log(car1.brand);
console.log(car1.color);