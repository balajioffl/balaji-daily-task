
// while loops

// 1. print all numbers from 1 to 10

let i = 0;

while(i<=10){
    console.log(i);
    i++;
}

// 2. print all even numbers from 1 to 20

let j = 1;

while(j<=20){
    if(j%2===0){
        console.log(j);
    }
    j++;
}


// 3. break

let k = 0;

while(k<10){
    if(k==5){
        console.log('Exiting loop at ',k);
        break;
    }
    k++;
}

// 4. continue

let a = 0;

while(a<10){
    if(a == 5){
        a++;
        continue;
    }
    console.log(a)
        a++;
}

// 5. pass

let b = 0;

while(b<10){
    if(b==5){
        // pass;
    }
    console.log(b)
    b++;
}