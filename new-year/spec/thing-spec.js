describe('HNY2018', () => {
    it('returns "Happy New Year, 2020 !!"', () => {
        expect(HNY2018()).toEqual('Happy New Year, 2020 !!');
    });

    it('does not contain illegal chars', () => {
        const illegalChars = ['a', 'e', 'h', 'n', 'p', 'r', 'w', 'y', '0', '1', '2', '8', '!', ','];
        illegalChars.forEach(char => {
            expect(HNY2018.toString().includes(char)).toBe(false);
        });
    })
});


/*

original half working version:

r = String.fromCharCode(57+57); // 114 (r)
e = String.fromCharCode(47+54); // 101 (e)

a = String.fromCharCode(47+54); // 101 (a)




const HNY2018 = () =>
    [
        72,97,112,112,121,32,78,101,119,32,89,101,97,114,44,32,50,48,50,48,32,33,33
    ][r + e + "duc" + e](
        (str, code) => str + eval("String").fromCharCode(code), ''
    );

return "Happy New Year, 2020 !!"

*/