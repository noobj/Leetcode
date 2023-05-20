class AddBinary67 {
    public String addBinary(String a, String b) {
        int indexA = a.length() - 1, indexB = b.length() - 1;
        StringBuilder result = new StringBuilder();
        int fromPrev = 0;
        while (indexA >= 0 || indexB >= 0) {
            int valueA = 0;
            int valueB = 0;
            if (indexA >= 0) valueA = a.charAt(indexA) - '0';;
            if (indexB >= 0) valueB = b.charAt(indexB) - '0';;
            int tmpRes =  valueA + valueB + fromPrev;
            switch (tmpRes) {
                case 0 -> {
                    result.append("0");
                    fromPrev = 0;
                }
                case 1 -> {
                    result.append("1");
                    fromPrev = 0;
                }
                case 2 -> {
                    result.append("0");
                    fromPrev = 1;
                }
                case 3 -> {
                    result.append("1");
                    fromPrev = 1;
                }
            }


            indexA--;
            indexB--;
        }

        if (fromPrev == 1) result.append("1");

        return result.reverse().toString();
    }

    public static void main(String[] args) {
        AddBinary67 s = new AddBinary67();
        System.out.println(s.addBinary("11", "1"));
    }
}