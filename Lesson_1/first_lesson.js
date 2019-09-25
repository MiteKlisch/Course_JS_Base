var age = 25;//Number

var name = 'Jhon Doe';//String

var isMarried = false;//Boolean

var email = null;//Null

var skype;//Undefined

var obj = {
    age: 25,
    name: 'John Doe',
    isMarried: false,
    email: null,
    skype: undefined
};

 var a = typeof obj.isMarried;
 console.log(a, 'isMarried');

console.log(typeof age, 'age');
console.log(typeof email, 'email');
console.log(typeof skype, 'skype');

document.write('<p style="font-size:30px">lalal</p>');

//CONFIRM
// var isAdmin = confirm('are you admin?');
// alert(isAdmin);

//PROMPT
var years = prompt('How old are you?', 19);
years = + years +2;
alert(years);