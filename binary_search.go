package main

import (
	"fmt"
)

func searchInsert(nums []int, target int) int {
    l, r := 0, len(nums) - 1

    for l <= r {
        m := (r + l) / 2

        if nums[m] == target {
            return m
        } else if nums[m] > target {
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return l
}
func main() {
	fmt.Println(searchInsert([]int{1,3,5,6}, 2))
}