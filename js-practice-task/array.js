
// Array in JS

// 1. map

// square numbers

let square = [2,4,6,8,10]
let square_numbers = square.map(square => square*2)
console.log(square)

// convert to uppercase

let fruits = ['apple','orange','mango']
let fruits_upper = fruits.map(fruits => fruits.toUpperCase())
console.log(fruits_upper)

// double the numbers

let numbers = [2,4,6,8]
let double = numbers.map(function(num){
    return num **2;
})
console.log(double)


// 2. Filter

// filter even numbers 

let num = [1,2,3,4,5,6,7,8]
let even = num.filter(n=>n%2==0)
console.log(even)

// filter words greater than 5

let words = ['hello','bro','welcome','to','this','code']
let filterWords = words.filter(function(word){
    if(word.length > 4){
        return word
    }
})
console.log(filterWords)


// mapping objects

let users = [
    {name:'Balaji', age:21},
    {name:'hari', age:20}
];

let names = users.map(user => user.name);
console.log(names);

// filtering objects

let adults = users.filter(user => user.age > 20);
console.log(adults)