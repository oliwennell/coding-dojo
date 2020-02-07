
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
            });
        });
    });
});
