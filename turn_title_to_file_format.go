package main

import (
    "flag"
    "fmt"
	"strings"
)

func main() {
	var tmpFormatedArgs []string
    fileExtPtr := flag.String("l", "go", "File extension you'd like to use")
    flag.Parse()
	args := flag.Args()

	for _, v := range args {
		// In case of passing with quotation mark
		splitedArgs := strings.Split(v, " ")
		fmt.Println(splitedArgs)
		for _, k := range splitedArgs {
			tmpFormatedArgs = append(tmpFormatedArgs, strings.ToLower(strings.Trim(k, ".")))
		}
	}

	result := strings.Join(tmpFormatedArgs, "_") + "." + *fileExtPtr
	fmt.Println(result)
}