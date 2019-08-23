
const lcdNumbers = 
[
    [
        "   ",
        "|  ",
        "|  "
    ],
    [
        " _ ",
        " _|",
        "|_ "
    ],
    [
        " _ ",
        " _|",
        " _|"
    ],
];

function convertToLcd(requestedNumber, width = 1, height = 1) {
    const singleDigits = requestedNumber.toString().split(''); // ['1', '1']
    const result = [];

    [0, 1, 2].forEach((i) => {
        const newRow = singleDigits.map((digit) => {
            const number = parseInt(digit, 10);
            const lcdDigit = lcdNumbers[number - 1];
            const lcdRow = lcdDigit[i];
            const stretchedRow = lcdRow.split("").map(c => c === '_' ? c.repeat(width) : c).join("");
            
            return stretchedRow

        }).join('');

        if(height > 1 && newRow.includes('|')) {
            result.push(newRow.replace('_', ' '));
        }
        result.push(newRow);
    });

    return "\n" + result.join("\n") + "\n";
}