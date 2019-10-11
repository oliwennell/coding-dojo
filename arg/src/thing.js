
function parseArgs(args) {

    const schema = [
        { 
            name: 'logging',
            argumentName: '-l',
        },
        { 
            name: 'ploppy',
            argumentName: '-p',
        }
    ];

    const resultObjects = [];
    const splitArgs = args.split(" ");

    splitArgs.forEach((arg) => {
        const matchingSchema = schema
            .find((schemaEntry) => schemaEntry.argumentName === arg);
    });

    schema.forEach(schemaEntry => {
        const resultObject = {
            [schemaEntry.name]: splitArgs.includes(schemaEntry.argumentName)
        };
        resultObjects.push(resultObject);
    });

    return resultObjects
}