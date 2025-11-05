
// js basics - loops


// 1. remove duplicates in array

let array1 = [1,1,2,3,4,4,5,6]

for (let i=0;i<array1.length;i++){
    for (let j=i+1;j<array1.length;j++){
        if(array1[i] == array1[j]){
            array1.splice(j,1);
            j--;
        }
    }
}
console.log(array1)


// 2. reverse a string

let array2 = 'hello welcome'
let reverse = ''

for (let i=array2.length-1;i>=0;i--){
    reverse += array2[i]
}
console.log(reverse)


// 3. palindrome

let str = "amma"
let reverse_str = str.split("").reverse().join("")

if(str==reverse_str){
    console.log('palindrome')
}
else{
    console.log("not a palindrome")
}

// 4. largest number 

let number_array = [1,6,8,7,6,9,2]
let largest = []

for (let i=0;i<number_array.length;i++){
    if(number_array[i]>largest){
        largest = number_array[i]
    }
}
console.log(largest)

// 5. count vowels

let str1 = 'hello broo'
let vowels = 'aeiou'
let count = 0

for(let i =0 ;i<str1.length;i++){
    if(vowels.includes(str1[i])){
        count += 1
    }
}
console.log("Vowels Count :", count)

