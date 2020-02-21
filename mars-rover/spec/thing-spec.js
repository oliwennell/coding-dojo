
describe('Rover Mover', () => {
    it('moving forwards once', () => {
        const rover = {
            x: 0,
            y: 0,
            directionFacing: 'N',
        };
        const commands = ['F'];

        const newRover = executeCommands(rover, commands);

        expect(newRover).toEqual({
            x: 0,
            y: 1,
            directionFacing: 'N',
            isWorking: true
        });
    });

    it('moving forwards twice', () => {
        const rover = {
            x: 0,
            y: 0,
            directionFacing: 'N',
        };
        const commands = ['F', 'F'];

        const newRover = executeCommands(rover, commands);

        expect(newRover).toEqual({
            x: 0,
            y: 2,
            directionFacing: 'N',
            isWorking: true
        });
    });

    it('moving backwards', () => {
        const rover = {
            x: 0,
            y: 0,
            directionFacing: 'N',
        };
        const commands = ['B', 'B'];

        const newRover = executeCommands(rover, commands);

        expect(newRover).toEqual({
            x: 0,
            y: -2,
            directionFacing: 'N',
            isWorking: true
        });
    });

    [
        { initialDirection: 'N', resultantDirection: 'W' },
        { initialDirection: 'W', resultantDirection: 'S' },
        { initialDirection: 'S', resultantDirection: 'E' },
        { initialDirection: 'E', resultantDirection: 'N' },
    ]
    .forEach(({ initialDirection, resultantDirection }) => {
        it('turning left changes direction', () => {
            const rover = {
                x: 0,
                y: 0,
                directionFacing: initialDirection,
            };
            const commands = ['L'];

            const newRover = executeCommands(rover, commands);

            expect(newRover).toEqual({
                x: 0,
                y: 0,
                directionFacing: resultantDirection,
                isWorking: true
            });
        });
    });

    [
        { initialDirection: 'W', resultantDirection: 'N' },
        { initialDirection: 'S', resultantDirection: 'W' },
        { initialDirection: 'E', resultantDirection: 'S' },
        { initialDirection: 'N', resultantDirection: 'E' },
    ]
    .forEach(({ initialDirection, resultantDirection }) => {
        it('turning right changes direction', () => {
            const rover = {
                x: 0,
                y: 0,
                directionFacing: initialDirection,
            };
            const commands = ['R'];

            const newRover = executeCommands(rover, commands);

            expect(newRover).toEqual({
                x: 0,
                y: 0,
                directionFacing: resultantDirection,
                isWorking: true
            });
        });
    });

    [
        { direction: 'W', resultantLocation: {x: -1, y: 0} },
        { direction: 'S', resultantLocation: {x: 0, y: -1} },
        { direction: 'E', resultantLocation: {x: 1, y: 0} },
        { direction: 'N', resultantLocation: {x: 0, y: 1} },
    ]
    .forEach(({direction, resultantLocation}) => {
        it(`moves forwards to correct location based on initial direction ${direction}`, () => {
            const rover = {
                x: 0,
                y: 0,
                directionFacing: direction,
            };
            const commands = ['F'];

            const newRover = executeCommands(rover, commands);

            expect(newRover).toEqual({
                x: resultantLocation.x,
                y: resultantLocation.y,
                directionFacing: direction,
                isWorking: true
            });
        })
    });

    [
        { direction: 'W', resultantLocation: {x: 1, y: 0} },
        { direction: 'S', resultantLocation: {x: 0, y: 1} },
        { direction: 'E', resultantLocation: {x: -1, y: 0} },
        { direction: 'N', resultantLocation: {x: 0, y: -1} },
    ]
    .forEach(({direction, resultantLocation}) => {
        it(`moves backwards to correct location based on initial direction ${direction}`, () => {
            const rover = {
                x: 0,
                y: 0,
                directionFacing: direction,
            };
            const commands = ['B'];

            const newRover = executeCommands(rover, commands);

            expect(newRover).toEqual({
                x: resultantLocation.x,
                y: resultantLocation.y,
                directionFacing: direction,
                isWorking: true
            });
        })
    });

    it("a long and winding road", () => {
        const rover = {
            x: 0,
            y: 0,
            directionFacing: 'N',
        };
        const commands = ['F', 'F', 'L', 'B', 'B', 'R', 'F'];

        const newRover = executeCommands(rover, commands);

        expect(newRover).toEqual({
            x: 2,
            y: 3,
            directionFacing: 'N',
            isWorking: true
        });
    });

    it('has a status code', () => {
        const rover = {
            x: 0,
            y: 0,
            directionFacing: 'N',
        };
        const commands = ['B', 'B'];

        const newRover = executeCommands(rover, commands);

        expect(newRover.isWorking).toEqual(true);
    });


    // command not recognised
    // direction facing not recognised
    // coordinates in wrong format
    // 
});
