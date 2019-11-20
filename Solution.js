'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    //Array declaration
    let vowels = ["a","e","i","o","u"];
    //Search vowels 
    for(let char of s)
    {
        if(vowels.includes(char))
        {
            console.log(char);
        }        
    }
    //Search consonants
    for(let char of s)
    {
        if (!vowels.includes(char))
        {
            console.log(char);
        }
    }
}

