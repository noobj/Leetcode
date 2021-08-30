export class MapTreeNode<K, V> {
    val: V | null;
    key: number | null;
    left: MapTreeNode<K, V> | null;
    right: MapTreeNode<K, V> | null;
    constructor(
        key?: number | null,
        val?: V | null,
        left?: MapTreeNode<K, V> | null,
        right?: MapTreeNode<K, V> | null
    ) {
        this.key = key === undefined ? 0 : key;
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    public search(target: number): V | null {
        let cur = this as MapTreeNode<K, V>;
        while (cur != null && cur.key != target) {
            if (cur.key < target) cur = cur.right;
            else cur = cur.left;
        }

        return cur ? cur.val : null;
    }

    public add(key: number, val: V): MapTreeNode<K, V> {
        let cur = this as MapTreeNode<K, V>;

        while (true) {
            if (cur != null) {
                if (key == cur.key) {
                    cur.val = val;
                    break;
                }
                if (key > cur.key) {
                    if (cur.right) cur = cur.right;
                    else {
                        cur.right = new MapTreeNode(key, val);
                        break;
                    }
                } else {
                    if (cur.left) cur = cur.left;
                    else {
                        cur.left = new MapTreeNode(key, val);
                        break;
                    }
                }
            } else {
                cur = new MapTreeNode(key, val);
            }
        }

        return this;
    }

    public minNode(node: MapTreeNode<K, V>): MapTreeNode<K, V> {
        while (node.left != null) node = node.left;

        return node;
    }

    public remove(key: number): MapTreeNode<K, V> {
        if (!this) return null;
        if (key === this.key) {
            if (this.right == null && this.left == null) return null;
            if (!this.right) {
                return this.left;
            } else if (!this.left) {
                return this.right;
            } else {
                const min = this.minNode(this.right);
                this.right = this.right.remove(min.key);
                this.key = min.key;
                this.val = min.val;
            }
        } else if (key > this.key) {
            this.right = this.right ? this.right.remove(key) : null;
        } else {
            this.left = this.left ? this.left.remove(key) : null;
        }

        return this;
    }
}

export class HashMap<K = number, V = number> implements Iterable<MapTreeNode<K, V>> {
    private hashMap;
    static readonly HASH_SIZE = 769;

    constructor() {
        this.hashMap = new Array(769).fill(null);
    }

    [Symbol.iterator]() {
        let pointer = 0;
        const hashMap = this.hashMap;

        return {
            next(): IteratorResult<MapTreeNode<K, V>> {
                if (pointer < hashMap.length) {
                    while (hashMap[pointer] == null && pointer < hashMap.length)
                        pointer++;

                    return {
                        done: pointer < hashMap.length ? false : true,
                        value: pointer < hashMap.length ? hashMap[pointer++] : null
                    };
                } else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    }

    put(key: number, val: V) {
        const hashValue = key % HashMap.HASH_SIZE;

        if (this.hashMap[hashValue] == null)
            this.hashMap[hashValue] = new MapTreeNode<K, V>(key, val);
        else {
            this.hashMap[hashValue].add(key, val);
        }
    }

    get(key: number): V | null {
        const hashValue = key % HashMap.HASH_SIZE;

        if (this.hashMap[hashValue] == null) return null;

        const val = this.hashMap[hashValue].search(key);
        if (val != null) return val;

        return null;
    }

    remove(key: number) {
        const hashValue = key % HashMap.HASH_SIZE;
        if (this.hashMap[hashValue])
            this.hashMap[hashValue] = this.hashMap[hashValue].remove(key);
    }

    printHash(key: number) {
        const hashValue = key % HashMap.HASH_SIZE;
        console.log(this.hashMap[hashValue]);
    }
}
