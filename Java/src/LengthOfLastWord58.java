public class LengthOfLastWord58 {
    public int lengthOfLastWord(String s) {
        if (s == null || s.length() == 0)
            return 0;
        int result = 0, i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == ' ')
            i--; // Skip all whitespaces at the end of s.
        while (i >= 0 && s.charAt(i) != ' ') { // Count the number of consecutive non-whitespace characters.
            result++;
            i--;
        }
        return result;
    }
}
