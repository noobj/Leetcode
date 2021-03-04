<?php

function isPrime(int $num): bool
{
    for($i = 2; $i < $num ; $i++) {
        if($num % $i == 0) return false;
    }

    return true;
}

function nPrimes(int $n): array
{
    $count = 0;
    $result = [];
    for($i = 2; $count < $n ; $i++) {
        if(isPrime($i)) {
            $result[] = $i;
            $count++;
        }
    }

    return $result;
}

print_r(nPrimes(155));