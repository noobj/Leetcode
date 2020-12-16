"use strict";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0;
    let result = [];
    while(s[i] !== undefined) {
        let indexOfMatch = result.indexOf(s[i]);
        if (indexOfMatch === -1) {
            result.push(s[i]);
        } else {
            if (result.length > j)
                j = result.length;
            result.push(s[i]);
            /**
             * Need to fetch the previous substring before that duplicated char,
             * or it will count all over from the zero.
             */
            result = result.splice(indexOfMatch+1);
        };
        i++;
    }
    if(result.length > j) j = result.length;
    return j;
};

console.log(lengthOfLongestSubstring("dvdf"));