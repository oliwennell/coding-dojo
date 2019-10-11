
function parseArgs(args) {

    const schema = [
        { 
            name: 'logging',
            argumentName: '-l',
        },
        { 
            name: 'ploppy',
            argumentName: '-p',
        },
        // port: {
        //     name: 'port',
        //     argumentName: '-p'
        // }
    ];

    const resultObjects = [];
    const splitArgs = args.split(" ");
    splitArgs.forEach((arg) => {
        const matchingSchema = schema.find((schemaEntry) => schemaEntry.argumentName === arg)

        const resultObject = {};
        resultObject[matchingSchema.name] = true;
        resultObjects.push(resultObject)
    })

    return resultObjects
}