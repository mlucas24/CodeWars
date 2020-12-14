using System;

public class Program
{
	public static int FindClosestValueInBst(BST tree, int target)
	{
		return FindClosestValueInBst(tree, target, tree.value);
    }
	public static int FindClosestValueInBst(BST tree, int target, int closest)
    {
		if (Math.Abs(target - tree.value) < Math.Abs(closest - target))
        {
			closest = tree.value;
        }
		if (tree.value > target && tree.left != null)
		{
			return FindClosestValueInBst(tree.left, target, closest);
		}
		else if (tree.value < target && tree.right != null)
		{
			return FindClosestValueInBst(tree.right, target, closest);
		}
		else return closest;
    }

	public class BST
	{
		public int value;
		public BST left;
		public BST right;

		public BST(int value)
		{
			this.value = value;
		}
	}

	public static void Main()
    {
        Console.WriteLine("hello");
    }
}


