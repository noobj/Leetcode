function findShortestSubArray(nums: number[]): number {
    interface Obj {
        count: number;
        length: number; // the length of subarray
        firstIndex: number; // first occurrence index
    }
    const hash = new Map<number, Obj>();
    let degree = 0;

    for (let i = 0; i < nums.length; i++) {
        let obj = hash.get(nums[i]);
        if (obj !== undefined) {
            obj.count++;
            obj.length = i - obj.firstIndex + 1;
        } else {
            obj = {
                count: 1,
                firstIndex: i,
                length: 1
            };
        }
        degree = Math.max(degree, obj.count);

        hash.set(nums[i], obj);
    }

    let result = Number.POSITIVE_INFINITY;
    for (const entry of hash.values()) {
        if (entry.count == degree) {
            result = Math.min(result, entry.length);
        }
    }

    return result;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
