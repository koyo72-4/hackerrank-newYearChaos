function minimumBribes(q) {
    let differences = q.map((person, index) => {
        let originalIndex = person - 1;
        return originalIndex - index;
    });
    let sortedDifferences = differences.slice(0).sort((a, b) => a - b);

    if (sortedDifferences[sortedDifferences.length - 1] > 2) {
        return console.log('Too chaotic');
    } else {
        for (let i = 0; i < differences.length; i++) {
            if (differences[i] <= 0) {
                let person = q[i];
                let higherNumbersBefore = 0;
                let startIndex = person - 2 >= 0 ? person - 2 : 0;
                let numbersBefore = q.slice(startIndex, i).sort((a, b) => a - b);
                
                if (numbersBefore.length !== 0) {
                    if (numbersBefore[numbersBefore.length - 1] < person) {
                        higherNumbersBefore = 0;
                    } else if (numbersBefore.length === 1) {
                        higherNumbersBefore = 1;
                    } else {
                        for (let j = 0; j < numbersBefore.length; j++) {
                            if (numbersBefore[j] > person) {
                                higherNumbersBefore = numbersBefore.length - j;
                                j = numbersBefore.length;
                            }
                        }
                    }
                }

                if (higherNumbersBefore + differences[i] !== 0) {
                    differences[i] = higherNumbersBefore + differences[i];
                }
                if (differences[i] > 2) {
                    return console.log('Too chaotic');
                }
            }
        }
    }

    let minBribes = differences.reduce((totalBribes, difference) => {
        if (difference > 0) {
            return totalBribes + difference;
        } else {
            return totalBribes;
        }
    }, 0);
    return console.log(minBribes);
}