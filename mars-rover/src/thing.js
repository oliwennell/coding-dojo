// TO DO!
// Handles Errors (Mismatch/Invalid commands)
// 'Shouldn't crash' - Igor
// Set 'stop at an obstacle'

// Nice-To-Have
// 45* Turns
// Battery - Ability to recharge?
// Pathfinding like a Pro

const turnLeft = directionFacing => {
    const directionLookup = { N: 'W', E: 'N', S: 'E', W: 'S' };
    return directionLookup[directionFacing];
};

const turnRight = directionFacing => {
    const directionLookup = { N: 'E', E: 'S', S: 'W', W: 'N' };
    return directionLookup[directionFacing];
};

const move = (rover, command) => {
    const direction = command === 'F' ? 1 : -1;

    if (rover.directionFacing === 'N') {
        return {
            y: rover.y + direction
        };
    } else if (rover.directionFacing === 'E') {
        return {
            x: rover.x + direction
        };
    } else if (rover.directionFacing === 'S') {
        return {
            y: rover.y - direction
        };
    } else if (rover.directionFacing === 'W') {
        return {
            x: rover.x - direction
        };
    }
};

const applyCommand = (rover, command) => {
    let result;
    
    const directions = ['N', 'S', 'E', 'W'];

    if(!directions.includes(rover.directionFacing)) 
    {
        return { isWorking: false };
    }

    switch (command) {
        case 'F':
            result = move(rover, command);
            break;
        case 'B':
            result = move(rover, command);
            break;
        case 'L':
            result = {
                directionFacing: turnLeft(rover.directionFacing)
            };
            break;
        case 'R':
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
