'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
let el=0;
let hl=0;
let l=0; 
    for(let i=1; i<=n; i++){
        let es="";
        let hs="";

        l=n-i;
   //     console.log("l: "+l);
    for(let j=0; j<n; j++){
 //       console.log("J: "+j);
        if(j<l){
 //       console.log("adding to es: ")
        es=es+" ";
        }
        else{
 //       console.log("adding to hs: ")
        hs=hs+"#";
    }    
    }
    let s=es+hs;
    console.log(s);
    
    // Write your code here

}
    

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
