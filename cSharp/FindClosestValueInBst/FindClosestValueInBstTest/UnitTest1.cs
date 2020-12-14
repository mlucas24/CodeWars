using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FindClosestValueInBstTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
			//arrange
			var root = new Program.BST(10);
			root.left = new Program.BST(5);
			root.left.left = new Program.BST(2);
			root.left.left.left = new Program.BST(1);
			root.left.right = new Program.BST(5);
			root.right = new Program.BST(15);
			root.right.left = new Program.BST(13);
			root.right.left.right = new Program.BST(14);
			root.right.right = new Program.BST(22);
            int expected = 13;

            //Act
            var actual = Program.FindClosestValueInBst(root, 12);

			//Assert
			Assert.AreEqual(expected, actual);
		}
    }
}