let str = "Putri Rizki Amelia-Kitchen-Sushiro-U22";
let results = []; // ['Cakra', 'Virtual Assitance', 29]

let wordContainer = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
        results.push(wordContainer);
        wordContainer = "";
    } else if(i === str.length-1) {
        wordContainer += str[i];
        results.push(wordContainer);
        wordContainer = "";
    } else {
        wordContainer += str[i];
    };
};

console.log(results)