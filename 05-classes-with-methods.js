// Problem 1: Define a class with a method
// Create the Cat class here
class Cat {
    constructor(name){
        this.name = name
    }
    introduce(){
        console.log(`Cat name: ${this.name}`)
    }
}


const cat1 = new Cat("Milo");
cat1.introduce();

// Problem 2: Define a class that updates its own property with a method
// Create the SavingsAccount class here
class SavingsAccount {
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
    }
    showBalance(){
        console.log(`Andi has a balance of Rp${this.balance}`)
    }
}


const account1 = new SavingsAccount("Andi", 20000);

account1.deposit(10000);
account1.showBalance();

// Problem 3: Define a class with methods that change and display state
// Create the GameCharacter class here
class GameCharacter{
    constructor (name, energy){
        this.name = name
        this.energy = energy
    }
    eat(amount){
        this.energy += amount
    }
    showStatus(){
        console.log(`${this.name} has energy ${this.energy}`)
    }
}


const character1 = new GameCharacter("Bimo", 50);

character1.showStatus();

character1.eat(20);

character1.showStatus();