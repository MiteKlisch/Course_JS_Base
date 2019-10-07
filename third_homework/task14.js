function tesk (str, boolean) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        if(boolean == true) {
            console.log(!!str);
            if (str[i] === 'a') {
                break;
            }
        } else {
            console.log(!!str);
            if (str[i] === 'a') {
                continue;
                }
            }
}
}

let text = 'Helloa World!';
tesk(text, false);
