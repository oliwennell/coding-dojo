
describe("lines of code", () => {
    
    it("all lines are code", () => {
        
        const input = 
        `const x = 123;
        console.log(x);`;
        
        const count = countLinesOfCode(input);
        
        expect(count).toBe(2);
    });
    
    it("all lines are code part 2", () => {
        
        const input = 
        `let x = 123;
        x = 456;
        console.log(x);`;
        
        const count = countLinesOfCode(input);
        
        expect(count).toBe(3);
    });
});


describe("lines of whitespace", () => {
    it("empty lines are not counted", () => {

        const input = 
            `let x = 123;

            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines of spaces are not counted", () => {

        const input = 
            `let x = 123;
            
            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines of tabs are not counted", () => {

        const input = 
            `let x = 123;

            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines of combination of spaces and tabs are not counted", () => {

        const input = 
            `let x = 123;
	    	     
            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });
});

describe("single line comments", () => {

    it("lines starting with single-line comments are not counted", () => {

        const input = 
            `let x = 123;
            // this is a comment
            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines ending with single-line comments are counted", () => {

        const input = 
            `let x = 123;
            x = 456; // this is a comment
            console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(3);
    });
});

describe("multi-line comments", () => {

    it("lines consisting of C-style comments are not counted", () => {

        const input = 
`let x = 123;
/* Hello!!! */
console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines within multi-line comments are not counted", () => {

        const input = 
`let x = 123;
/*
    Hello!!!
*/
console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines within multi-line comments are not counted part 2", () => {

        const input = 
`let x = 123; /*
    Hello!!!
*/ console.log(x);`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });

    it("lines within complicated multi-line comments are counted", () => {

        const input = 
`/*this is some code */ const x = /*hello world*/ 123 /* hello again */; // bye! /*
console.log('hello');`;

        const count = countLinesOfCode(input);

        expect(count).toBe(2);
    });
});