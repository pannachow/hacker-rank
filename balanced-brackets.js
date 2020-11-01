'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the isBalanced function below.
function isBalanced(s){
    const bracket = [];
    for (let ch of s) {
        if (["[", "{", "("].includes(ch)) {
            bracket.push(ch);
        } else if (ch === "}") {
            if (bracket.pop() !== "{") {
                return "NO";
            }
        }else if (ch === "]") {
            if (bracket.pop() !== "[") {
                return "NO";
            }
        }else if (ch === ")") {
            if (bracket.pop() !== "(") {
                return "NO";
            }
        }
    }
    return bracket.length === 0 ? "YES" : "NO";
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
