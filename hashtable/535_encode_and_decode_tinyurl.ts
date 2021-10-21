const hash = new Map<string, string>();
const set = new Set<string>();

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    while (!set.has(longUrl)) {
        const code = genRandom(6);
        if (!hash.has(code)) {
            set.add(longUrl);
            hash.set(code, longUrl);
        }
    }

    return [...hash].find(([k, v]) => v == longUrl)[0];
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    const code = shortUrl.slice(-6);

    return hash.get(code);
}

function genRandom(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function main() {
    const hrstart = process.hrtime();
    console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
