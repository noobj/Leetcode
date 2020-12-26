/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0 ; i < height.length - 1 ; i++) {
        let nowHeight = 0;
        for(let j = height.length - 1; j > 0 ; j--) {
            if(height[j] < nowHeight) continue;
            let area = (j - i) * Math.min(height[i], height[j]);
            if(area > max) max = area;
            if(height[i] < height[j]) break;
            nowHeight = height[j];
        }
    }

    return max;
};

console.log(maxArea([4,3,2,1,4]));