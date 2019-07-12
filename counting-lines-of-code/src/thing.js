function countLinesOfCode(input) {
    const minified = minify(input);    
    const linesOfCode = minified.split('\n');
    return linesOfCode.length;
}

function minify(input) {
    return input.replace(/\/\*[^]+\*\//, '\n')
                .replace(/^\s*\n/m, '')
                .replace(/^\s*\/\/.*\n/m, '');
}