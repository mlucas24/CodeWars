using System;
using System.Collections.Generic;

namespace PalindromeLinkedList
{
    public class ListNode
    {
        public int val;
        public ListNode next;
        public ListNode(int val = 0, ListNode next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

    class Program
    {
        public static bool IsPalindrome(ListNode head)
        {
            List<int> listVals = new List<int>();
            while (head != null)
            {
                listVals.Add(head.val);
                head = head.next;
            }
            for (int i = 0; i < listVals.Count; i++)
            {
                if (listVals[i] != listVals[listVals.Count - i - 1]) return false;
            }
            return true;
        }
        static void Main(string[] args)
        {
            ListNode one = new ListNode(1, null);
            ListNode two = new ListNode(2, null);
            ListNode three = new ListNode(2, null);
            ListNode four = new ListNode(1, null);

            one.next = two;
            two.next = three;
            three.next = four;

            var v = IsPalindrome(one);
            Console.WriteLine(v);
        }
    }



}
