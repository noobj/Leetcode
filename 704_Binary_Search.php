<?php

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer
 */
function search($nums, $target)
{
    $left = 0;
    $right = sizeof($nums) - 1;
    $mid = floor(($left + $right) / 2);
    while($mid <= $right && $mid >= $left) {
        if($nums[$mid] == $target) return $mid;
        if($target > $mid) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }

        $mid = floor(($left + $right) / 2);
    }

    return -1;
}


echo search([-1,0,3,5,9,12], 0);