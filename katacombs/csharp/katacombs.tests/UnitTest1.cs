using katacombs;
using NUnit.Framework;
using System;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void When_game_starts_player_is_at_origin()
        {
            var player = new Player();
            Assert.That(player.Position, 
                Is.EquivalentTo(new[]{0,0,0}));
        }

        [Test]
        public void When_game_starts_should_have_a_player()
        {
            var game = new Game();
            Assert.That(game.Player,
                Is.InstanceOf(typeof(Player)));
        }

        [Test]
        public void When_game_starts_should_have_a_map()
        {
            var game = new Game();
            Assert.That(game.GameMap,
                Is.InstanceOf(typeof(GameMap)));
        }

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