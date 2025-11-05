
// 1. sorting an array without sort method 

let array = [1,3,2,4,5]

for (let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array)


// 2. object task

let users = [
  { id: 1, name: "Balaji", age: 21 },
  { id: 2, name: "Hari", age: 20 }
];

// add user

function addUser(id,name,age){
    users.push({id,name,age})
}
addUser(3,'pattabi',23)
console.log(users)


// updateuser

function updateUser(id,new_name,new_age){
    let user = users.find(u => u.id == id)
    if (user){
        user.name = new_name;
        user.age = new_age;
    }
    else{
        console.log('user not found !')
    }
}
updateUser(3,'Pattabi',24)
console.log(users)


// delete user

function deleteUser(id){
    users = users.filter(u => u.id !== id)
}
deleteUser(3)
console.log(users)


// 3. Calculator

let choice = prompt("Choose an operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n");

let num1 = parseInt(prompt("Enter number 1:"));
let num2 = parseInt(prompt("Enter number 2:"));
let result;

switch(choice){
    case "1":
        result = num1 + num2;
        alert('The answer is ' +result);
        break;
    
    case "2":
        result = num1 - num2;
        alert('The answer is ' +result);
        break;

    case "3":
        result = num1 * num2;
        alert('The answer is ' +result);
        break;

    case "4":
        result = num1 / num2;
        alert('The answer is ' +result);
        break;
}

