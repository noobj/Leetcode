package main

import (
	"fmt"
)

func partitionLabels(S string) []int {
	var max, current int
	var par []string
	var result []int
	used := make(map[string]int)

	for current < len(S) {
		init := current
		max = current

		for current < len(S) && current <= max {
			if used[string(S[current])] == 1 {
				current++
				continue
			}

			used[string(S[current])] = 1
			for i := len(S) - 1 ; i > max ; i-- {
				if S[i] == S[current] {
					max = i
				}
			}
			current++
		}
		par = append(par, S[init: max+1])
	}

	for i := range par {
		result = append(result, len(par[i]))
	}
	return result
}

func main() {
	fmt.Println(partitionLabels("ababcbacadefegdehijhklij"))
}