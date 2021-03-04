"use strict";
let binarySearch = function (arr, x) {
    let start = 0, end = arr.length - 1;
    // Iterate while start not meets end
    while (start <= end) {
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
        // If element is present at mid, return True
        if (arr[mid] === x)
            return mid;
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};
function searchRange(nums, target) {
    // let found: number = binarySearch(nums, target);
    let found = nums.indexOf(target);
    console.log(found);
    let foundRight, foundLeft;
    foundRight = foundLeft = -1;
    if (found !== -1) {
        for (let i = found; i < nums.length; i++) {
            if (nums[i] === target)
                foundRight = i;
        }
        // for (let i: number = found; i >= 0; i--) {
        //     if (nums[i] === target) foundLeft = i;
        // }
    }
    return [found, foundRight];
}
;
console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 10], 8));
