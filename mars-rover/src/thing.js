// TO DO!
// Handles Errors (Mismatch/Invalid commands)
// 'Shouldn't crash' - Igor
// Set 'stop at an obstacle'

// Nice-To-Have
// 45* Turns
// Battery - Ability to recharge?
// Pathfinding like a Pro

const North = 'N';
const East = 'E';
const South = 'S';
const West = 'W';

const Forwards = 'F';
const Backwards = 'B';
const Left = 'L';
const Right = 'R';

const turnLeft = directionFacing => {
    const directionLookup = { N: West, E: North, S: East, W: South };
    return directionLookup[directionFacing];
};

const turnRight = directionFacing => {
    const directionLookup = { N: East, E: South, S: West, W: North };
    return directionLookup[directionFacing];
};

const move = (rover, command) => {
    const direction = command === Forwards ? 1 : -1;

    if (rover.directionFacing === North) {
        return {
            y: rover.y + direction
        };
    } else if (rover.directionFacing === East) {
        return {
            x: rover.x + direction
        };
    } else if (rover.directionFacing === South) {
        return {
            y: rover.y - direction
        };
    } else if (rover.directionFacing === West) {
        return {
            x: rover.x - direction
        };
    }
};

const applyCommand = (rover, command) => {
    let result;
    
    const directions = [North, South, East, West];

    if(!directions.includes(rover.directionFacing)) 
    {
        return { isWorking: false };
    }

    switch (command) {
        case Forwards:
            result = move(rover, command);
            break;
        case Backwards:
            result = move(rover, command);
            break;
        case Left:
            result = {
                directionFacing: turnLeft(rover.directionFacing)
            };
            break;
        case Right:
            result = {
                directionFacing: turnRight(rover.directionFacing)
            };
            break;
        default:
            return { isWorking: false };
    }

    return { 
        ...rover,
        ...result,
        isWorking: true
    }
};

const executeCommands = (initialRover, commands) => {
    return commands.reduce(applyCommand, initialRover);
}
