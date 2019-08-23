function findAcronyms(input) {

    let buckets = {};

    input.forEach(word => {

        const sorted = word.split("").sort().join("");
        const bucket = buckets[sorted];
        if (bucket === undefined) {
            buckets[sorted] = [word];
        }
        else {
            bucket.push(word);
        }
    });

    return Object.entries(buckets).map(entry => entry[1]);
}

function findMatch(word, output) {
    return output.findIndex(x => isAcronym(x[0], word));
}

function isAcronym(word1, word2) {
    const sortedWord1 = word1.split("").sort().join("");
    const sortedWord2 = word2.split("").sort().join("");
    return sortedWord1 == sortedWord2;
}