// Problem 1: Create an object that inherits from a prototype with Object.create()
const animal = {
  // Create an eat() method
  eat(){
    console.log("The animal is eating")
  }
};

// Create a cat with the animal prototype
const cat = Object.create(animal)
cat.eat();

// Problem 2: Inherit a method that uses this from a prototype
const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Create a student with the person prototype
const student = Object.create(person)
// Add the name "Budi"
student.name = "Budi"

student.greet();

// Problem 3: Add own properties and check an object's prototype with Object.getPrototypeOf()
const vehicle = {
  drive() {
    console.log("The vehicle is moving");
  }
};

const car = Object.create(vehicle);

car.brand = "Toyota";

car.drive();

// Check the car's prototype
console.log(Object.getPrototypeOf(car) === vehicle);