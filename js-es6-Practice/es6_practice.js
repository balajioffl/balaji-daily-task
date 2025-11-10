
// var , let , const 

var a = 25;
var b = 35;
console.log(a + b)

// 1.

if(true){
    var msg = 'hi'
}
console.log(msg)


if(true){
    let msg = 'hi'
}
console.log(msg)

if(true){
    const msg = 'hi'
}
console.log(msg)


// 2.

var a = 20;
console.log(a)

var a = 30;
console.log(a)


let a = 10;
let a = 20;
console.log(a)


const a = 10;
const a = 20;
console.log(a)


// 3. 

var a = 25;
console.log(a)
a = 10;
console.log(a)

let a = 25;
console.log(a)
a = 10;
console.log(a)

const a = 25;
console.log(a)
a = 10;
console.log(a)


// Arror Functions

const add = (a,b) => {return a + b}
console.log(add(2,3))


// 1. map 

let numbers = [1,2,3,4,5]
let double = numbers.map(number => number*2);
console.log(numbers)
console.log(double)

// 2. filters

let words = ['apple','orange','mango','pineapple']
let big_words = words.filter(word => word.length>5)
console.log(words)
console.log(big_words)

// 3. reduce

let nums = [1,2,3,4,5]
let total = nums.reduce((sum,nums) => sum + nums,0)
console.log(nums)
console.log(total)


// template literals

let firstname = 'virat';
let lastname = 'kohli';
let role = 'cricketer';

let msg = `${firstname} ${lastname} is a best ${role}`
console.log(msg)

