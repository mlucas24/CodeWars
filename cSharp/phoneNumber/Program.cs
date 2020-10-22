using System;

namespace phoneNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] phoneNum = new int[] { 9, 0, 4, 7, 9, 0, 9, 4, 9, 2 };
            String answer = CreatePhoneNumber(phoneNum);
            Console.WriteLine(answer);
        }
        public static string CreatePhoneNumber(int[] numbers)
        {
            string phoneNumber = "";
            for (int i = 0; i < numbers.Length; i++)
            {
                if (i == 0)
                {
                    phoneNumber += "(" + numbers[0];
                }
                else if (i == 2)
                {
                    phoneNumber += numbers[2] + ") ";
                }
                else if (i == 5)
                {
                    phoneNumber += numbers[5] + "-";
                }
                else
                {
                    phoneNumber += numbers[i];
                }
            }
            return phoneNumber;
        }
    }
}
