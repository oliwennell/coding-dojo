describe("GameOfLife", () => {
    let apocalypseGrid;
    let middleRowAllAlive;
    let crossOfDoom;
    let awkwardParty;
    beforeEach(()=>{
        apocalypseGrid = [
            ['💀','💀','💀'],
            ['💀','💀','💀'],
            ['💀','💀','💀']
        ];
        middleRowAllAlive = [
            ['💀','💀','💀'],
            ['🎅','🎅','🎅'],
            ['💀','💀','💀']
        ];
        crossOfDoom = [
            ['💀','🎅','💀'],
            ['🎅','🎅','🎅'],
            ['💀','🎅','💀']
        ];
        awkwardParty = [
            ['💀','💀','💀'],
            ['🎅','💀','🎅'],
            ['💀','💀','💀']
        ];
    });

    it("has a grid", () => {
        expect(spawn(apocalypseGrid)).toEqual(apocalypseGrid)
    });

    it("spawn returns a new grid", () => {
        const nextGeneration = spawn(middleRowAllAlive);
        middleRowAllAlive[0][0] = null;
        expect(nextGeneration[0][0]).not.toBe(null);
    })

    it("the original grid is not modified", ()=> { 
        expect(spawn(middleRowAllAlive)).not.toBe(middleRowAllAlive);
    });

    describe("Rule 1 - Fewer than 2 live neighbours dies", () => {    
        it("fewer than 2 live neighbours dies", () => {
            const input = ([
                    ['💀','💀','💀'],
                    ['💀','🎅','💀'],
                    ['💀','💀','💀']
                ]);
            expect(spawn(input)).toEqual(apocalypseGrid);
        });
    
        it("2 live neighbours survives", () => {
            const nextGeneration = spawn(middleRowAllAlive);
            expect(nextGeneration[1][1]).toEqual('🎅');
        });
    
        it("1 live neighbour dies", () => {
            const nextGeneration = spawn(middleRowAllAlive);
            expect(nextGeneration[1][0]).toEqual('💀');
        });
    })

    describe("Rule 2 - Greater than 3 live neighbours dies", () => {    
        it("3 live neighbours dies", () => {
            const nextGeneration = spawn(crossOfDoom);
            expect(nextGeneration).toEqual(awkwardParty);
        })
    })

});

// 💀
// 🎅