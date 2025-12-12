// Annotations

// 1.Strings
// let myName: string = "shiva";
// myName = "another name";
// console.log(myName);

//2.Numbers
// let myNumber:Number=12;
// myNumber=15;
// console.log(myNumber);

//3.Boolean
// let tsHard:boolean=false;
// tsHard=true;
// console.log(tsHard);

// TypeInference
// let tech = "typescript";
// let favNumber = 12;
// let tsHard = true;
// console.log(typeof tsHard, typeof tech, typeof favNumber);
// console.log(tech, favNumber, tsHard);

// Any Type
// let color: any = "crimson";
// color=20;
// color=true;
// console.log(color);

// Function Parameter Annotations
// 1.Regular Function
// function addOne(num: number) {
//   return num + 1;
// }
// const result = addOne(3);
// console.log(result);

// 2.Arrow Function
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);

// Return Function
// 1.Regular function
// function double1(x: number): number {
//   return x * x;
// }
// const res = double1(2);
// console.log(res);

// 2.Arrow Function
// const double2 = (x: number): number => x * x;
// console.log(double2(2));

// Void
// function printMessage(message: string): void {
//   console.log(`This is My ${message}`);
// }
// printMessage("Secret Message");

// Never
// 1.When Function Throws an error
// function throwError(msg: string): never {
//   throw new Error(msg);
// }
// 2.When a Function Has an infinite loop
// function infiniteLoop(): never {
//   while (true) {}
// }

// Array Types
// const nums: number[] = [1, 2, 3, 4];
// const str: string[] = ["one", "two", "three"];
// console.log(nums);
// console.log(str);

// Dimensional Arrays
// const singleDi: number[] = [1, 2, 3, 4];
// const multiDi: number[][] = [[1, 2, 3, 4, 5]];
// const tripleDi: number[][][] = [[[1, 2, 3, 4, 5, 6, 7]]];
// console.log(singleDi);
// console.log(multiDi);
// console.log(tripleDi);

// Objects
// const person: { firstname: string; lastname: string; age: number } = {
//   firstname: "Jhon",
//   lastname: "doe",
//   age: 30,
// };
// console.log(`Name:${person.firstname} ${person.lastname}, Age :${person.age}`);

// Objects as Function Return
// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "Shiva",
//     age: 20,
//     location: "India",
//   };
// }
// const res = printUser();
// console.log(res);

// Type Alias

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };
// const printPersonInfo = (person: Person) => {
//   return `Name:(${person.name}) Age:(${person.age}) location:(${person.location}) `;
// };
// const res = printPersonInfo({ name: "Shiva", age: 20, location: "India" });
// console.log(res);

// Optional Properties
// type Person = {
//   name: string;
//   age?: number;
//   location: string;
// };
// const person: Person = {
//   name: "Shiva",
//   location: "india",
// };
// console.log(
//   `Name:${person.name} ,Age:${person.age} ,Location:${person.location}`
// );

// Intersection Type
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };
// type User = UserInfo & AccountDetails;
// const Shiva: User = {
//   first: "Shiva",
//   last: "Prasad",
//   age: 21,
//   email: "shivaprasad209@gmail.com",
//   password: "password123",
// };
// console.log(
//   `Name:${Shiva.first} ${Shiva.last} Age:${Shiva.age} Email:${Shiva.email} Password:${Shiva.password}`
// );

// Unions
// let password: string | number = 20;
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };
// let user: UserInfo | AccountDetails = {
//   first: "Shiva",
//   last: "Prasad",
//   age: 21,
// };
// const items:(number|string)[]=[1,5,5,'hello']
// console.log(items)

// Literal Types
// let color:'red'|"crimson"|"green";
// color="red";
// color="yellow";
// console.log(color)

// Tuple
// Example 1
// let myTuple: [number, string];
// myTuple = [10, "Hello World"];
// console.log(myTuple);
// Example 2
// const products: (number | string)[] = ["item 1", 12];
// console.log(products);
// Example 3
// const games: [string, number, boolean] = ["Game 1", 2, true];
// console.log(games);

// enum
// enum WeatherConditions {
//   Sunny = "sunny",
//   Cloudy = "cloudy",
//   Rainy = "rainy",
//   Snowy = "snowy",
// }
// const currentWeather = WeatherConditions.Snowy;
// console.log(`The current Weather is ${currentWeather} `);

// Access Modifiers
// class Human {
//   public first: string;
//   private last: string;
//   protected age: number;
//   constructor(first: string, last: string, age: number) {
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }
//   getName(): string {
//     return `${this.first} ${this.last} Age:${this.age}`;
//   }
// }
// class Person extends Human {
//   constructor(first: string, last: string, age: number) {
//     super(first, last, age);
//   }
// }
// const Shiva = new Person("Shiva", "Prasad", 20);
// console.log(Shiva);

// Getters and Setters
// class Myclass {
//   private _myProperty: number = 0;
//   get myProperty(): number {
//     return this._myProperty;
//   }
//   set myProperty(value: number) {
//     this._myProperty = value;
//   }
// }
// const myInstance = new Myclass();
// console.log(`Current Value: ${myInstance.myProperty}`);
// myInstance.myProperty = 10;
// console.log(`Current Value: ${myInstance.myProperty}`);

// Interfaces
// Example 1
// interface computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }
// const computerExample: computer = {
//   name: "i7",
//   ram: 8,
//   hdd: 100,
// };
// console.log(computerExample.name);
// console.log(computerExample.ram);
// console.log(computerExample.hdd);
// Example 2
// interface Movie {
//   readonly name: string;
//   ratings: number;
//   genre?: string;
// }
// const movie1: Movie = {
//   name: "Star Wars",
//   ratings: 8.0,
//   genre: "Action",
// };
// Example 3
// interface MathOperation {
//   (X: number, y: number): number;
// }
// const add: MathOperation = (a, b) => a + b;
// const subtract: MathOperation = (a, b) => a - b;
// console.log(add(2, 2));
// console.log(subtract(9,2));
// Example 4
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   sayHello(): void;
// }
// function greet(person: Person) {
//   console.log(`Hello ,${person.firstName} ${person.lastName}`);
//   person.sayHello();
// }
// const Shiva: Person = {
//   firstName: "Shiva",
//   lastName: "Prasad",
//   age: 30,
//   sayHello() {
//     console.log("Hi There");
//   },
// };
// const Virat: Person = {
//   firstName: "Virat",
//   lastName: "Kohli",
//   age: 37,
//   sayHello() {
//     console.log("Hey How You Doing ");
//   },
// };
// greet(Shiva);
// greet(Virat);
// Example 5
// interface Song {
//   songName: string;
//   singerName: string;
//   printSongInfo(songName: string, singerName: string): string;
// }
// const song1: Song = {
//   songName: "Natural",
//   singerName: "Imagin Drigon",
//   printSongInfo: (songName, singerName) => {
//     return `Song:${songName}, Singer:${singerName}`;
//   },
// };
// console.log(song1.printSongInfo("Natural", "Imagine Drigon"));
// Example 6
// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMovieInfo(name: string, price: number, ratings: number): string | number;
// }
// interface MovieGenre extends MovieDetails {
//   genre: string;
// }
// const movie1: MovieGenre = {
//   name: "Star Wars",
//   ratings: 8.0,
//   genre: "Action",
//   printMovieInfo(
//     name: string,
//     price: number,
//     ratings: number
//   ): string | number {
//     return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
//   },
// };
// const res = movie1.printMovieInfo("Jhon Wick", 100, 8);
// console.log(res);

// Example 7
// interface Vehicle {
//   start(): void;
//   stop(): void;
// }
// class Car implements Vehicle {
//   start(): void {
//     console.log("Car Is Starting...");
//   }
//   stop(): void {
//     console.log("Car Is Stopped...");
//   }
// }
// const myCar=new Car();
// myCar.start();
// myCar.stop();

// Declaration Merging
// interface Car {
//   brand: string;
//   start(): void;
// }
// interface Car {
//   model: string;
//   stop(): void;
// }
// const myCar: Car = {
//   brand: "BMW",
//   model: "M3",
//   start() {
//     console.log("Start");
//   },
//   stop() {
//     console.log("Stop");
//   },
// };
// myCar.start();
// myCar.stop();
// Generics
// Example 1
// function uniqueDatatypes<T>(item: T, defaultValues: T): [T, T] {
//   return [item, defaultValues];
// }
// const num = uniqueDatatypes<number>(10, 20);
// const str = uniqueDatatypes<string>("Hello", "World");
// const bool = uniqueDatatypes<boolean>(true, false);
// console.log(num);
// console.log(str);
// console.log(bool);
// Example 2
// function uniqueDatatypes<T>(item: T, defaultValues: T): [T, T] {
//   return [item, defaultValues];
// }
// interface Dog {
//   name: string;
//   breed: string;
// }
// const dog1 = uniqueDatatypes<Dog>(
//   { name: "buddy", breed: "labrador" },
//   { name: "Default", breed: "Unknown" }
// );
// console.log(dog1);
// Example 3
// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }
// const stringObject = { a: "apple", b: "banana", c: "cherry" };
// const res = getRandomKeyValuePair<string>(stringObject);
// console.log(res);
// const numberObject = { one: 1, two: 2, three: 3 };
// const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
// console.log(randomNumberPair);
// Example 4
// function filteredArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = filteredArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNumber);

// const stringArr = ["apple", "banana", "cherry", "date"];
// const shortWords = filteredArray<string>(stringArr, (word) => word.length < 6);
// console.log(shortWords);

// interface Fruits {
//   name: string;
//   color: string;
// }
// const fruitArray: Fruits[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
//   { name: "Cherry", color: "Red" },
// ];
// const redFruits = filteredArray<Fruits>(
//   fruitArray,
//   (fruit) => fruit.color === "Red"
// );
// console.log(redFruits);
// Example 5

