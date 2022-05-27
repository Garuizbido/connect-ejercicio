
function isPalindrome(message){
    const len = message.length;  
  
    for (let i = 0; i < len / 2; i++) {  
        if (message[i] !== message[len-1-i]) {  
            return false;
        }  
    }  
    return true;
}

module.exports = isPalindrome;