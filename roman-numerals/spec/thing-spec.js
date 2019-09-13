describe("digits to numerals", () => {
    function testNumber(digit, roman) {
        expect(digitToRomanV2(digit)).toBe(roman);
    }

    it("single numerals", () => {
        testNumber(1, "I");
        testNumber(5, "V");
        testNumber(10, "X");
    });

    it("two numerals", () => {
        testNumber(2, "II");
        testNumber(6, "VI");
        testNumber(11, "XI");
    });

    it("three numerals", () => {
        testNumber(3, "III");
        testNumber(7, "VII");
        testNumber(12, "XII");
    });

    it("one fewer than numeral", () => {
        testNumber(4, "IV");
        testNumber(9, "IX");
        testNumber(14, "XIV");
        testNumber(19, "XIX");
    });

    it("break", () => {
        testNumber(8, "VIII");
        testNumber(13, "XIII");
        testNumber(36, "XXXVI");
        testNumber(49, "XLIX");
        testNumber(60, "LX");
        testNumber(68, "LXVIII");
        testNumber(88, "LXXXVIII");
    });

    it("", () => {
        testNumber(40, "XL");
        testNumber(50, "L");
    });

});

describe("numerals to digits", () => {

    [
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
        ["VII", 7],
        ["IX", 9],
        ["X", 10],

    ]
    .forEach(([roman, digit]) => {
        it(`${roman} => ${digit}`, () => {
            testRoman(roman, digit);
        })
    });

    function testRoman(roman, digit) {
        expect(romanToDigit(roman)).toBe(digit);
    }

});