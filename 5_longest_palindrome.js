/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = s[0];
    for(let i = 0 ; i < s.length - 1 ; i++) {
        let currentPalindrome = s[i];
        let left = i, right = i;

        /**
         * Test the double and singular case, like bab baab
         */
        if(s[i] == s[i + 1]) {
            currentPalindrome = s[i] + s[i + 1];
            right = i + 1;
        }

        for(let j = 1 ; right + j < s.length && s[right + j] == s[left - j] ; j++) {
            if(s[right + j] == s[left - j]) {
                currentPalindrome = s[left - j] + currentPalindrome + s[right + j];
            } else break;
        }
        if(currentPalindrome.length > max.length)
            max = currentPalindrome;

        /**
         * Needs to test triplet case, like baaab
         */
        currentPalindrome = s[i];
        left = right = i;
        if(s[i] == s[i + 1] && s[i] == s[i - 1]) {
            currentPalindrome = s[i - 1] + s[i] + s[i + 1];
            left = i - 1;
            right = i + 1;

            for(let j = 1 ; right + j < s.length && left -j >= 0; j++) {
                if(s[right + j] == s[left - j]) {
                    currentPalindrome = s[left - j] + currentPalindrome + s[right + j];
                } else break;
            }

            if(currentPalindrome.length > max.length)
                max = currentPalindrome;
        }
    }

    return max
};

console.log(longestPalindrome("baaab"));