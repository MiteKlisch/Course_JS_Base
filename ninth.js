let a = 10;
let c = 2;

let res = prompt('Input math operator (+, -, *, /)');

if (res === '+') {
    console.log('a + c =', a + c);
}
else if (res === '-') {
    console.log('a - c =', a - c);
}
else if( res === '*'){
    console.log('a * c =', a * c);
}
else if( res === '/'){
    console.log('a / c =', a / c);
}
else if (res == null){
    console.log('nothing');
}