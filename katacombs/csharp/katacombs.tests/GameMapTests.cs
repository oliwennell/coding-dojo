using katacombs;
using NUnit.Framework;

namespace Tests
{
    public class GameMapTests
    {
        [TestCase(0,0,0, "title zero")]
        [TestCase(0,0,1, "title one")]
        public void When_getTitle_is_called_on_map_returns_title(int x, int y, int z, string expectedTitle)
        {
            var thisMap = new GameMap();
            Assert.That(thisMap.GetTitle(new [] {x, y, z}), 
                Is.EqualTo(expectedTitle));
        }


        [TestCase(0,0,0, "description 0")]
        [TestCase(0,0,1, "description 1")]
        public void When_getDescription_is_called_on_map_returns_description(int x, int y, int z, string expectedDescription)
        {
            var thisMap = new GameMap();
            Assert.That(thisMap.GetDescription(new [] {x,y,z}), 
                Is.EqualTo(expectedDescription));
        }
    }
}