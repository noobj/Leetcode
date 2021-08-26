import { TreeNode } from './binary_tree.module';

export class HashSet {
    private hashSet;
    static readonly HASH_SIZE = 769;

    constructor() {
        this.hashSet = new Array(769).fill(null);
    }

    add(key: number) {
        const hashValue = key % HashSet.HASH_SIZE;
        if (this.hashSet[hashValue] == null) this.hashSet[hashValue] = new TreeNode(key);
        else {
            if (!this.contains(key)) this.hashSet[hashValue].add(key);
        }
    }

    remove(key: number) {
        const hashValue = key % HashSet.HASH_SIZE;
        if (this.hashSet[hashValue] == null) return;

        this.hashSet[hashValue] = this.hashSet[hashValue].remove(key);
    }

    contains(key: number): boolean {
        const hashValue = key % HashSet.HASH_SIZE;

        if (this.hashSet[hashValue] == null) return false;

        if (this.hashSet[hashValue].search(key) != null) return true;

        return false;
    }
}
