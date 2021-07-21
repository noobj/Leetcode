function countBits(n: number): number[] {
    const ans: number[] = [];
    ans[0] = 0;
    let offset = 1;
    for (let i = 1; i <= n; i++) {
        if (offset === i / 2) offset *= 2;

        ans[i] = ans[i - offset] + 1;
    }
    return ans;
}

console.log(countBits(20));
