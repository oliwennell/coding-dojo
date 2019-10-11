
function parseArgs(args) {

    const schema = [
        { 
            name: 'logging',
            argumentName: 'l',
            defaultValue: false
        },
        { 
            name: 'ploppy',
            argumentName: 'p',
            defaultValue: 0
        }
    ];

    const resultObjects = [];
    const splitArgs = args.split("-");

    // [ "l", "p 100" ]
    splitArgs.forEach((arg) => {
        if (arg.length > 0) {
            const argName = arg.split(" ")[0];

            const matchingSchema = schema
                .find((schemaEntry) => schemaEntry.argumentName === argName);

            if (matchingSchema === undefined) {
                throw "error: you are :(";
            }
        }
    });

    schema.forEach(schemaEntry => {
        const value = arg.split(" ")[1] || schemaEntry.defaultValue;

        //const value = schemaEntry.defaultValue; //splitArgs.includes(schemaEntry.argumentName);

        const resultObject = {
            [schemaEntry.name]: value
        };
        resultObjects.push(resultObject);
    });

    return resultObjects;
}