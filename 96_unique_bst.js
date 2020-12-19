/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return bts(n);
};

function bts(nums) {
    if(nums == 1 || nums == 0) return 1;

    if(nums == 2) return 2;

    if(nums == 3) return 5;

    let result = 0;

    for(let i = 0 ; i < nums ; i++) {
        let left = i;
        let right = nums - i - 1;

        result += bts(left) * bts(right);
    }

    return result;
}

console.log(numTrees(5));