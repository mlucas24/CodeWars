//prompt: https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3590/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const depthFirstSearch = clonedNode => {
        if (clonedNode == null) return null;
        else if (clonedNode.val == target.val) return clonedNode;
        else return depthFirstSearch(clonedNode.left) || depthFirstSearch(clonedNode.right);
    }
    return depthFirstSearch(cloned);
};