const { rawListeners } = require("process");
const readline = require("readline");
const _readline = readline.createInterface({
    input: process.stdin
});

let testcase = 0;
let result = [];
let _checkPassword = false;

_readline.on("line", (data)=>{
    if(testcase == 0 && !isNaN(parseInt(data))){
        testcase = parseInt(data);;
        _checkPassword = true;
    }
    else if(_checkPassword){
        result.push(checkPassword(data));
        testcase--;
        if(testcase==0){
            for(let i = 0; i < result.length; i++){
                console.log(`Case #${i+1}: ${result[i]}`);
            }
        }
    }
    _checkPassword = !_checkPassword;
});

/**
 * 
 * @param {string} password
 */

function checkPassword(password){
    let checkNumber = false;
    let checkLowerChar = false;
    let checkUpperChar = false;
    let checkSpecialChar = false;

    for(let char of password){
        if(char >= "0" && char <= "9"){
            checkNumber = true;
        }

        if(char >= "a" && char <= "z"){
            checkLowerChar = true;
        }

        if(char >= "A" && char <= "Z"){
            checkUpperChar = true;
        }

        if(char == "#" || char == "&" || char == "@" || char == "*"){
            checkSpecialChar = true;
        }
    }
    if(!checkSpecialChar){
        password = password + "#"
    }

    if(!checkUpperChar){
        password = password + "A"
    }

    if(!checkLowerChar){
        password = password + "a"
    }

    if(!checkNumber){
        password = password + "1"
    }

    while(password.length < 7){
        password = password + "1"
    }
    return password;
}