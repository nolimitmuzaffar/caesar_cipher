var decrypted_str = "";

function decrypt (encrypted_str, rotation) {
    for(let i=0; i < encrypted_str.length; i++) {
        var char = encrypted_str[i];   //get that character at index i
        if (char.match(/[a-z]/i)){    //check if char is a letter
            ascii_val = encrypted_str.charCodeAt(i);    //get the ASCII number of the char
            char = String.fromCharCode(((ascii_val - 97 
                + rotation)));   //assume the string is in lowercase 
        }
        decrypted_str+=char;   //add the deciphered character to string decrypted_str
    }
    return decrypted_str;   //lastly return the final decrypted string

}
var encrypted_str="hello";
decrypt(encrypted_str, 3);

