/* ------------- QUESTION 1 ------------- */

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return`Hello My name is ${this.name} and I am ${this.age} Years old.`;
    }
}
// creating instance of person class

let person1 = new Person('john',30);

//calling the greet method

console.log(person1.greet());

/* ------------- QUESTION 2 ------------- */

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayInfo(){
        return`Product: ${this.name}, Price: $${this.price.toFixed(2)}`
    }
}

// Creating instance of prodect class

let product = new Product('Laptop',999);

// calling displayInfo method

console.log(product.displayInfo());

/* ------------- QUESTION 3 ------------- */

class Student {
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    getDetails(){
        return`Student Name: ${this.name}, Grade: ${this.grade}`
    }
}

// creating multiple instance of student class\

let students = [
    new Student('Nick',"A"),
    new Student('Harsh',"B"),
    new Student('Satya',"C")
];
//iterating through array and calling the getDetails method for each student

students.forEach(student =>{
    console.log(student.getDetails());
})

/* ------------- QUESTION 4 ------------- */

class Rectangle {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        return this.width * this.height;
    }
}

// create instance of Rectangle class

let myRectangle = new Rectangle(5,10);
let area = myRectangle.calculateArea();
console.log("Area of Rectangle:",area);

/* ------------- QUESTION 5 ------------- */

class Book {
    constructor(title, author, pages = 100) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    getSummary() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
  }
  
  const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  console.log(book.getSummary());

  /* ------------- QUESTION 6 ------------- */

  class Animal{
    constructor(species,sound){
        this.species=species;
        this.sound=sound;
    }
    makeSound(){
        console.log(this.sound);
    }
  }
  class Mamal extends Animal{
    constructor(species,sound,hasFur){
        super(species,sound);
        this.hasFur = hasFur;
    }
    makeSound(){
        console.log("mamal sound");
    }
  }
  class Bird extends Animal{
    constructor(species,sound,canFly){
        super(species,sound);
        this.canFly = canFly;
    }
    makeSound(){
        console.log("bird sound");
    }
  }

let lion = new Mamal("Lion","Roar",true);
lion.makeSound()

let eagle = new Bird("Eagle","Screech",true);
eagle.makeSound()

/* ------------- QUESTION 7 ------------- */

class Vehicle {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  
    start() {
      console.log("Vehicle started");
    }
  }
  
  class Car extends Vehicle {
    constructor(type, color, brand) {
      super(type, color);
      this.brand = brand;
    }
  
    start() {
      super.start();
      console.log("Car started");
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(type, color, model) {
      super(type, color);
      this.model = model;
    }
  
    start() {
      super.start();
      console.log("Motorcycle started");
    }
  }
/* ------------- QUESTION 8 ------------- */
// class Shape {
//     constructor(name, color) {
//       this.name = name;
//       this.color = color;
//     }
  
//     draw() {
//       console.log("Drawing shape");
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(name, color, radius) {
//       super(name, color);
//       this.radius = radius;
//     }
  
//     draw() {
//       console.log("Drawing circle");
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(name, color, width, height) {
//       super(name, color);
//       this.width = width;
//       this.height = height;
//     }
  
//     draw() {
//       console.log("Drawing rectangle");
//     }
//   }
  

//   let myCircle = new Circle("Circle1", "Red", 10);
//   myCircle.draw(); 
  
//   let myrectangle = new Rectangle("Rectangle1", "Blue", 5, 10);
//   myrectangle.draw(); 
/* ------------- QUESTION 9 ------------- */
class Employee {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    work() {
      console.log("Working");
    }
  }
  
  class Manager extends Employee {
    constructor(name, department) {
      super(name, "Manager");
      this.department = department;
    }
  
    work() {
      console.log("Managing in the " + this.department + " department.");
    }
  }
  
  class Developer extends Employee {
    constructor(name, skills) {
      super(name, "Developer");
      this.skills = skills;
    }
  
    work() {
      console.log("Coding with skills: " + this.skills.join(", "));
    }
  }
  
  
  let m = new Manager("John Doe", "IT");
  m.work(); 
  
  let d = new Developer("Jane Doe", ["JavaScript", "Python"]);
  d.work();  
/* ------------- QUESTION 10 ------------- */
class Account {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  }
  
  class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    deposit(amount) {
      super.deposit(amount);
      this.balance += this.balance * this.interestRate;
    }
  }
  
  class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
      super(accountNumber, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    deposit(amount) {
      if (this.balance + amount < -this.overdraftLimit) {
        console.log("Overdraft limit exceeded. Deposit failed.");
      } else {
        super.deposit(amount);
      }
    }
  }
  
  
  // Creating accounts
  const savingsAccount = new SavingsAccount("12345", 1000, 0.05);
  const checkingAccount = new CheckingAccount("67890", 500, 100);
  
  // Depositing money
  savingsAccount.deposit(200);
  console.log(`Savings account balance: ${savingsAccount.balance}`);
  
  checkingAccount.deposit(500);
  console.log(`Checking account balance: ${checkingAccount.balance}`);
  
  checkingAccount.deposit(-600); // Trying to overdraft
  console.log(`Checking account balance: ${checkingAccount.balance}`);