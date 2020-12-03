using System;

public class Program {
	public static int[] TwoNumberSum(int[] array, int targetSum) {
		// Write your code here.
		for(int i = 0; i < array.Length; i++) 
		{
			int searchNum = targetSum - array[i];
			if (Array.IndexOf(array, searchNum, i+1) != -1)
			{
				return new int[2] {array[i], searchNum};
			}
		}
		return new int[0];
	}
}
