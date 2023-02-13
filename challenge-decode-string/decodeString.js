// Write your code below this line
// function encrypt(text, s){
//         let result=""
//         for (let i = 0; i < text.length; i++)
//         {
//             let char = text[i];
//             if (char.toUpperCase(text[i]))
//             {
//                 let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
//                 result += ch;
//             }
//             else
//             {
//                 let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
//                 result += ch;
//             }
//         }
//         return result;
//     }


//     console.log(encrypt('hello', 2))

    console.log('============================================================')

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newalpha = "";

    function shift(n){
        for (let i = 0; i < alphabet.length; i++){
            let offset = (i + n) % alphabet.length;
            newalpha += alphabet[offset];
        }
        return newalpha
        
    }

    function decode(message){
        let result = "";
        message = message.toLowerCase();
        for (let i = 0; i < message.length; i++){
            let index = alphabet.indexOf(message[i]);
            result += newalpha[index];
        }
        return result;
    }
    console.log(shift(2));
    console.log(decode('fcjjm'))