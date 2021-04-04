<?php


/**
 * @param String $s
 * @return Boolean
 */
function isValid($s) {
    $stack = [];
    $str = str_split($s);
    $leftSymbols = "([{";
    $rightSymbols = ")]}";

    foreach ($str as $c) {
        $pos = stripos($leftSymbols, $c);

        if ($pos !== false) {
            $stack[] = $pos;
        } else {
            $pos = stripos($rightSymbols, $c);
            $pop = array_pop($stack);
            if ($pop != $pos) return false;
        }
    }

    if (sizeof($stack) != 0) return false;

    return true;
}

