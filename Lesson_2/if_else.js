const age = +prompt('How old are you?');

// let access;

// if (age<18) {
//     access = false;
//     console.log('you don`t have access');
// } else if(age => 18) {
//     access = true;
//     console.log('you have access');
// }
// else if(!age)
//     console.log('write a number');

// ternary operator
let access = (age >=18) ? 'you have access' : 'you don`t have access';
console.log(access);