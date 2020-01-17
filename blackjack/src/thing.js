function isFaceCard(value) {
    return value === "King"
        || value === "Jack"
        || value === "Queen";
}

function checkIfAce(value) {
    return value === "Ace";
}

function canFirstAceBeEleven(numberOfAcesFound, total) {
    return total + 11 + (numberOfAcesFound - 1) <= 21;
}

function runGame(faceValues) {
    let score = 0;
    let numberOfAcesFound = 0;

    faceValues.forEach(value => {
        if (checkIfAce(value)) {
            numberOfAcesFound++;
        }
        else {
            const intValue = isFaceCard(value)
                ? 10
                : parseInt(value, 10);
            score += intValue;
        }
    });

    if (numberOfAcesFound > 0) {
        if (canFirstAceBeEleven(numberOfAcesFound, score)) {
            score += 11;

            const valueOfRemainingAces = numberOfAcesFound - 1;
            score += valueOfRemainingAces;

        } else {
            score += numberOfAcesFound;
        }
    }

    return {
        score,
        isBust: score > 21
    };
}
