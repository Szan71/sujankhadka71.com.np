let pwd = [];
let num;

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const myCipher = cipher('mySecretSalt')
console.log(myCipher('1234'));

function passCheck($event) {
    let audio1 = new Audio('./sounds/passcode.mp3');
    audio1.play();

    const value = parseInt($event.value);
    console.log(value)



    if (pwd.length < 4) {

        pwd.push(value);
        num = +pwd.join("");
    }

    if (pwd.length == 4) {
        if (myCipher(pwd.join("")) === '393a3b3c') {
            let audio = new Audio('./sounds/unlock.mp3');
            audio.play();
            homeScreen();
        } else {
            setTimeout(() => { alert('Wrong Password! Try again') }, 200);
        }
        pwd = [];

    }





}