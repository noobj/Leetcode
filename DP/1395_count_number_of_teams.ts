function numTeamsBruteForce(rating: number[]): number {
    let count = 0;

    for (let i = 0; i < rating.length - 1; i++) {
        for (let j = i + 1; j < rating.length - 1; j++) {
            if (rating[i] > rating[j]) continue;

            for (let k = j; k < rating.length; k++) {
                if (rating[k] > rating[j]) {
                    count++;
                }
            }
        }
    }

    for (let i = 0; i < rating.length - 1; i++) {
        for (let j = i + 1; j < rating.length - 1; j++) {
            if (rating[i] < rating[j]) continue;

            for (let k = j; k < rating.length; k++) {
                if (rating[k] < rating[j]) {
                    count++;
                }
            }
        }
    }

    return count;
}

function numTeams(rating: number[]): number {
    const g = new Array(rating.length).fill(0);
    const s = new Array(rating.length).fill(0);

    for (let i = 0; i < rating.length - 1; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[i] > rating[j]) s[i]++;
            if (rating[i] < rating[j]) g[i]++;
        }
    }

    let answer = 0;
    for (let i = 0; i < rating.length - 1; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[i] > rating[j]) answer += s[j];
            if (rating[i] < rating[j]) answer += g[j];
        }
    }

    return answer;
}

function main() {
    const hrstart = process.hrtime();
    console.log(
        numTeams([
            922, 108, 1029, 129, 1215, 2987, 1505, 1503, 2125, 2000, 677, 838, 2560, 2540,
            2251, 1840, 276, 1062, 1219, 1061, 131, 2504, 748, 900, 9, 2445, 41, 2235,
            1725, 2261, 1008, 437, 2267, 1128, 2258, 2851, 1766, 2913, 1737, 1655, 1632,
            1295, 1682, 2020, 2437, 1345, 2204, 2758, 2722, 1553, 568, 2479, 1806, 830,
            158, 1085, 1723, 2542, 2585, 2108, 2064, 1692, 696, 2919, 901, 2211, 1380,
            2410, 1440, 1207, 103, 644, 2736, 1036, 1381, 1009, 98, 2349, 2311, 1947,
            1985, 2779, 1874, 2008, 320, 1273, 56, 314, 581, 1856, 1978, 1139, 490, 668,
            1891, 813, 1412, 867, 1340, 272, 2078, 882, 2446, 2380, 88, 444, 2550, 740,
            328, 1930, 1224, 379, 687, 556, 513, 2684, 1789, 1509, 991, 2236, 121, 1434,
            447, 2326, 365, 1882, 67, 569, 856, 468, 1541, 523, 1262, 2257, 915, 2931,
            283, 2630, 1138, 1325, 2314, 2778, 553, 1442, 2037, 233, 1363, 2511, 811, 419,
            2489, 779, 2366, 2947, 2713, 1842, 300, 1095, 1708, 1492, 2592, 2145, 1999,
            1700, 2001, 315, 253, 1744, 430, 1327, 2038, 1740, 2721, 445, 751, 1267, 2850,
            861, 1443, 2546, 2041, 472, 1661, 1838, 265, 2664, 2753, 1195, 2434, 1200,
            2918, 66, 70, 670, 226, 1235, 2971, 2166, 1540, 2547, 2957, 1234, 151, 1677,
            1284, 1322, 1621, 1093, 1546, 2579, 1652, 550, 2300, 521, 1562, 2784, 155,
            2909, 1922, 392, 448, 415, 1247, 2956, 470, 117, 428, 2985, 541, 1522, 1524,
            2333, 2392, 2210, 642, 391, 1872, 2872, 2345, 82, 2101, 2165, 603, 1966, 998,
            1570, 175, 60, 2237, 136, 178, 652, 231, 2821, 2292, 104, 215, 2196, 2051,
            1362, 2152, 1818, 1970, 450, 2802, 847, 1735, 1053, 191, 1955, 1032, 590, 621,
            459, 1143, 1044, 2623, 212, 2416, 2810, 495, 2711, 1118, 2964, 293, 2573,
            2495, 404, 1040, 1501, 2932, 1552, 2140, 1487, 1346, 2294, 2189, 1927, 1441,
            2463, 2448, 1030, 1438, 669, 586, 720, 868, 606, 2141, 2638, 2614, 2952, 1738,
            675, 1395, 2624, 142, 2740, 485, 120, 897, 1542, 592, 2830, 1602, 2175, 1534,
            845, 1109, 1045, 1969, 1326, 795, 1612, 808, 1825, 1236, 1482, 996, 1817,
            2961, 1125, 1942, 576, 914, 898, 268, 301, 439, 2098, 527, 2844, 1190, 2735,
            2025, 2515, 1161, 2054, 758, 1649, 1437, 1559, 918, 87
        ])
    );
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;