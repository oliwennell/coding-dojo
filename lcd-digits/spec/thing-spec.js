describe("", () => {

    it("single digit number", () => {
        const result = convertToLcd(1);
        expect(result).toBe(
`
   
|  
|  
`);
    });

    it("single digit number (2)", () => {
        const result = convertToLcd(2);
        expect(result).toBe(
`
 _ 
 _|
|_ 
`);
    });

    it("single digit number (3)", () => {
        const result = convertToLcd(3);
        expect(result).toBe(
`
 _ 
 _|
 _|
`);
    });

    it("two digit number (11)", () => {
        const result = convertToLcd(11);
        expect(result).toBe(
`
      
|  |  
|  |  
`);
    });

    it("single digit number (2 as width 2)", () => {
        const result = convertToLcd(2, 2);
        expect(result).toBe(
`
 __ 
 __|
|__ 
`);
    });

    it("single digit number (3 as width 2)", () => {
        const result = convertToLcd(3, 2);
        expect(result).toBe(
`
 __ 
 __|
 __|
`);
    });

    it("single digit number (2 as width 3)", () => {
        const result = convertToLcd(2, 3);
        expect(result).toBe(
`
 ___ 
 ___|
|___ 
`);
    });

    it("single digit number (2 as height 2)", () => {
        const result = convertToLcd(2, 1, 2);
        expect(result).toBe(
`
 _ 
  |
 _|
|  
|_ 
`);
    });
});