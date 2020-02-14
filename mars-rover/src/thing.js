// TO DO!
// Tests - Complicated movement (Move + Turn)
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

const moveForward = rover => {
    
}

const applyCommand = (prevRover, command) => {
    let result;

    switch (command) {
        case 'F':
            result = {
                y: prevRover.y + 1
            };
            break;
        case 'B':
            result = {
                y: prevRover.y - 1
            };
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
