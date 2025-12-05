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
