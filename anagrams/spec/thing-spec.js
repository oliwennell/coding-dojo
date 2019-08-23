describe("when there are no acronyms in the input", () => {
    let input;

    beforeEach(() => {
        input = [
            "abc",
            "def"
        ]
    })
    it("then there are no acronyms in the output", () => {
        const output = findAcronyms(input);
        expect(output).toEqual([
            ["abc"],
            ["def"]
        ]);
    })
});

describe("when all words are acronyms of each other in the input", () => {
    let input;

    beforeEach(() => {
        input = [ "abc", "cba" ];
    });

    it("then all the acronyms in the output are matching", () => {
        const output = findAcronyms(input);
        expect(output).toEqual([
            ["abc", "cba"]
        ])
    })
});

[
    {
       input: [ "abc", "xxx", "cba" ],
       expectedOutput: [ ["abc", "cba"], ["xxx"] ]
    },
    {
        input: [ "inlets", "listen", "bork" ],
        expectedOutput: [ ["inlets", "listen"], ["bork"] ]
     }
]
.forEach(({ input, expectedOutput }) => {
    describe("when some words are acronyms of each other in the input", () => {
        
        it("then the relevant acronyms in the output are matching", () => {
            const output = findAcronyms(input);
            expect(output).toEqual(expectedOutput);
        })
    })  
});

describe("hold on to your butts", () => {
    it("doesn't go bang", () => {
        const input = dict.split("\n");
        console.log(`we have ${input.length} things in the dictionary`);
        const output = findAcronyms(input);
        
        const special = output.find(x => x[0] === "crepitus");
        console.log(JSON.stringify(special));
    })
})