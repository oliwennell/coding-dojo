using katacombs;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.That(Class1.MeaningOfLife(), Is.EqualTo(42));
        }
    }
}