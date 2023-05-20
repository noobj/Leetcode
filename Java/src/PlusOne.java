import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class PlusOne66 {
    public int[] plusOne(int[] digits) {
        List<Integer> stack = new ArrayList<>(Arrays.asList());
        int carry = 1;

        for (int i = digits.length - 1; i >= 0 ; i--) {
            int tmp = digits[i] + carry;

            if (tmp == 10) {
                carry = 1;
                tmp = 0;
            } else carry = 0;
            stack.add(0, tmp);
        }

        if (carry == 1) stack.add(0, 1);

        return stack.stream().filter(t -> t != null).mapToInt(t -> t).toArray();
    }
}