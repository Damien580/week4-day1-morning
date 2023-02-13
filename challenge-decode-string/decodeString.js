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

    console.log('=============================================')


    const decoder = str =>{
        let cypher = parseInt(str[0])
        let alphabet = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']   
        
        strArr = str.slice(1).toLowerCase().split('')

        for (i = 0; i < strArr.length; i++){

            index = alphabet.indexOf(strArr[i])
            index += cypher

            if (index > 25){
                index -= 25
        }
                str[i] = alphabet[index]
        }

            return strArr.join('')
        }
    

    console.log(decoder('2fcjjm'))