<?php

    /**
     * @param Integer[] $A
     * @return Integer[]
     */
    function sortArrayByParityII(array $A): array {
        $evenWrong = [];
        $oddWrong = [];
        for($i = 0; $i < sizeof($A); $i = $i + 2) {
            if($A[$i] % 2 != 0) {
                $evenWrong[] = $i;
            }
        }
        for($i = 1; $i < sizeof($A); $i = $i + 2) {
            if($A[$i] % 2 == 0) {
                $oddWrong[] = $i;
            }
        }
        for($i = 0; $i < sizeof($evenWrong); $i++) {
            $swap_a = $evenWrong[$i];
            $swap_b = $oddWrong[$i];
            list($A[$swap_a], $A[$swap_b]) = array($A[$swap_b], $A[$swap_a]);
        }

        return $A;
    }

    $arr = [3, 4];

    sortArrayByParityII($arr);