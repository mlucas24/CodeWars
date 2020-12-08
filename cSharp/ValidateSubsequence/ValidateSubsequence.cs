using System;
using System.Collections.Generic;

public class Program
{
    public static bool IsValidSubsequence(List<int> array, List<int> sequence)
    {
        // Write your code here.
        if (sequence.Count > array.Count) return false;
        for (int i = 0; i < array.Count; i++)
        {
            if (sequence.IndexOf(array[i]) == -1)
            {
                if (sequence.Count == 0) return true;
                else if (sequence.Count > 0 && i == array.Count - 1) return false;
                else continue;
            }
            else if (sequence.IndexOf(array[i]) == 0)
            {
                sequence.RemoveAt(0);
            }
            else
            {
                return false;
            }
        }
        if (sequence.Count > 0) return false;
        return true;
    }
}