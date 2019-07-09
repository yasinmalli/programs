// check if all the chars of a string is unique

function isUnique(inputStr) {
    let uniqueSet = new Map();

    let result = true;
    for (let i=0; i <inputStr.length; i++) {
        if (uniqueSet.get(inputStr[i])) {
            result = false;
            break;
        }
        uniqueSet.set(inputStr[i], true);
    }

    return result;
}

['aaa', 'asdasd', '114', 'asd'].forEach(s => {
    console.log(`${s} isUnique: ${isUnique(s)}`);
});