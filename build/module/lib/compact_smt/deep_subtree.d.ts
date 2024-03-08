import { Field, Provable } from 'o1js';
import { Hasher } from '../model.js';
import { Store } from '../store/store.js';
import { CompactSparseMerkleProof } from './proofs.js';
import { CompactSparseMerkleTree } from './csmt.js';
export { CompactDeepSparseMerkleSubTree };
/**
 * This is used to compute new roots for state transitions based on sideNodes.
 *
 * @class CompactSparseMerkleTree
 * @extends {CompactDeepSparseMerkleSubTree<K, V>}
 * @template K
 * @template V
 */
declare class CompactDeepSparseMerkleSubTree<K, V> extends CompactSparseMerkleTree<K, V> {
    /**
     * Creates an instance of CompactDeepSparseMerkleSubTree.
     * @param {Store<V>} store
     * @param {Field} root
     * @param {Provable<K>} keyType
     * @param {Provable<V>} valueType
     * @param {{ hasher?: Hasher; hashKey?: boolean; hashValue?: boolean }} [options={
     *       hasher: PoseidonHasherFunc,
     *       hashKey: true,
     *       hashValue: true,
     *     }]  hasher: The hash function to use, defaults to PoseidonHasherFunc; hashKey:
     * whether to hash the key, the default is true; hashValue: whether to hash the value,
     * the default is true.
     * @memberof CompactDeepSparseMerkleSubTree
     */
    constructor(store: Store<V>, root: Field, keyType: Provable<K>, valueType: Provable<V>, options?: {
        hasher?: Hasher;
        hashKey?: boolean;
        hashValue?: boolean;
    });
    /**
     * Add a branch to the tree, a branch is generated by smt.prove.
     *
     * @param {CompactSparseMerkleProof} proof
     * @param {K} key
     * @param {V} [value]
     * @memberof CompactDeepSparseMerkleSubTree
     */
    addBranch(proof: CompactSparseMerkleProof, key: K, value?: V): Promise<void>;
}