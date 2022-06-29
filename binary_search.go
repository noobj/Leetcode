package main

import (
	"fmt"

	"github.com/noobj/Leetcode/datastruct"
)

func searchInsert(nums []int, target int) int {
	l, r := 0, len(nums)-1

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
	fmt.Println(searchInsert([]int{1, 3, 5, 6}, 2))
	tree := datastruct.TurnArrayIntoTree([]int{1, 2, 3, 4, 5}, 0)
	fmt.Println(tree.InorderTraversaliterative())
}
