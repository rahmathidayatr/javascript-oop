// Problem 1: Create objects with a factory function
// Create the factory function here
function createCar(brand){
    return {brand: brand}
}

const car1 = createCar("Toyota");
const car2 = createCar("Honda");

console.log(car1);
console.log(car2);

// Problem 2: Create objects with a factory function that takes multiple parameters
// Create the factory function here
function createStudent(name, major){
    return {
        name: name,
        major: major
    }
}

const student1 = createStudent("Budi", "TI");
const student2 = createStudent("Andi", "SI");

console.log(student1);
console.log(student2);

// Problem 3: Create objects with a factory function that includes a method
// Create the factory function here
function createAnimal(name, type){
    return {
        name: name,
        type: type,
        makeSound(){
            console.log(`${name} is a ${type}`)
        }
    }
}

const animal1 = createAnimal("Milo", "Cat");
const animal2 = createAnimal("Luna", "Rabbit");

animal1.makeSound();
animal2.makeSound();
