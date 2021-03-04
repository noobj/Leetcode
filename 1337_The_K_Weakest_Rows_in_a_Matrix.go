package main

import (
	"fmt"
	"sort"
)


type entry struct{
    index int
    soldiers int
}

func kWeakestRows(mat [][]int, k int) []int {
	count := make([]entry, len(mat), len(mat))

	for i := range mat {
		left, right := 0, len(mat[i]) - 1

		for left <= right {
			middle := (left + right) / 2

			if mat[i][middle] == 0 {
				right = middle - 1
			} else {
				left = middle + 1
			}
		}

		count[i] = entry{i, left}
	}

	sort.Slice(count, func(i, j int) bool {
        si, sj := count[i].soldiers, count[j].soldiers
        return (si == sj && count[i].index < count[j].index) || si < sj
    })

    res := make([]int, 0, k)
    for i := 0; i < k; i++ {
        res = append(res, count[i].index)
    }

    return res
}

func main() {
	a := [][]int{
		{1,1,0,0,0},
		{1,1,1,1,0},
		{1,0,0,0,0},
		{1,1,0,0,0},
		{1,1,1,1,1},
	 }

	fmt.Println(kWeakestRows(a, 5))
}