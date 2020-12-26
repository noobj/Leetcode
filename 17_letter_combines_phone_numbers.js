let numberLettetsMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxzy"
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let currentCombination = [];
    for (let i = 0; i < digits.length; i++) {
        currentCombination = combineTwoStrings(currentCombination, numberLettetsMap[digits[i]]);
    }

    return currentCombination;
};

function combineTwoStrings(s1, s2) {
    if(s1.length == 0) return s2.split("");
    let result = [];
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            result.push(s1[i] + s2[j]);
        }
    }

    return result;
}

console.log(letterCombinations("9"));