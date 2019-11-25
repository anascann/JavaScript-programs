let Hello=function(name){
    console.log(`hi ${name}`);
}
let name='john'
//Hello(name)

let FullNameWelcome=function(Firstname, LastName){
    console.log('HI! Welcome to our Channel');
    console.log(`Hello ${Firstname} ${LastName}  We are Happy to help you`);
}

let Firstname='Anas'
let LastName='Khan'
//FullNameWelcome(Firstname, LastName)

//Now Creatting functions to add

let addition=function(num1, num2){
    let result=num1+num2;
    console.log(result);
}

//addition(5,4);

//function to multiply.
let multiply=function(n1, n2){
    let product=n1*n2;
    return product;
}

let n1=4;
let n2=6;
let finalresult=multiply(n1,n2);
console.log(`Product of two numbers is ${n1} and ${n2} is ${finalresult}`)