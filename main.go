package main

import (
	"fmt"

	"github.com/noobj/Leetcode/datastruct"
	"github.com/noobj/Leetcode/search"
)

func main() {
	fmt.Println(search.SearchInsert([]int{1, 3, 5, 6}, 2))
	tree := datastruct.TurnArrayIntoTree([]int{1, 2, 3, 4, 5}, 0)
	fmt.Println(tree.InorderTraversaliterative())
}
