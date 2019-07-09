/* given two strings, write a method to decide if one is a permutation of other

// * is it case-sensitive
// * how about whitespace

*/

function isPermutationOf(str1, str2) {
    if (str1.length === 0 || str1.length !== str2.length) { return false; }
    
    let charSet = new Map();
    for (let i=0; i <str1.length; i++) {
        let charToSearch = str1[i].toLowerCase();
        charSet.set(charToSearch, charSet.get(charToSearch) + 1 || 1);
    }

    for (let i=0; i <str2.length; i++) {
        let charToSearch = str2[i].toLowerCase();
        let value = charSet.get(charToSearch);

        if (!value) { return false; }
        if (value === 1) { charSet.delete(charToSearch); }
        else { charSet.set(charToSearch, --value); }
    }
    
    return charSet.size === 0;
}

[{first: 'God', second: 'dog'},
{first: 'aws', second: 'saw'},
{first: 'word', second: 'sentence'},
{first: 'asdasd', second: 'asd'}].forEach(valuesObj => {
    console.log(`${valuesObj.second} is permutation of ${valuesObj.first}: ${isPermutationOf(valuesObj.first, valuesObj.second)}`);
})