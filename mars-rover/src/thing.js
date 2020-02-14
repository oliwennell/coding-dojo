// TO DO!
// Set 'stop at an obstacle'
// 'Shouldn't crash' - Igor
// Handles Errors (Mismatch/Invalid commands)

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

const applyCommand = (prevRover, command) => {
    let result;

    switch (command) {
        case 'F':
            result = move(prevRover, command);
            break;
        case 'B':
            result = move(prevRover, command);
            break;
        case 'L':
            result = {
                directionFacing: turnLeft(prevRover.directionFacing)
            };
            break;
        case 'R':
            result = {
                directionFacing: turnRight(prevRover.directionFacing)
            };
            break;
    }

    return { ...prevRover, ...result }
};

const executeCommands = (initialRover, commands) => {
    return commands.reduce(applyCommand, initialRover);
}
