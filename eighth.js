let a = prompt('What`s your name?', 'admin');
let name = a.toLowerCase();




if (name === 'admin') {
    let age = prompt('Your age', 21);
    if(age > 20)
    {
        let b = prompt('Your password', 'Password');
        let password = b.toLowerCase();
        if(password === 'password')
        {
            console.log('Welcome');
        }
        else
        {
            console.log('Input correct password');
        }
    } 
    else
        {
        console.log('you are young');
        }
} 
else 
{
      console.log('I don`t know you');  
}