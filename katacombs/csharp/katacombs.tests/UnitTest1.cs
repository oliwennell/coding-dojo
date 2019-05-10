using katacombs;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;

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
            Assert.That(player.Coordinates, 
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

        [TestCase("GO N", 0, 1, 0)]
        [TestCase("GO S", 0, -1, 0)]
        [TestCase("GO W", -1, 0, 0)]
        [TestCase("GO E", 1, 0, 0)]
        [TestCase("GO UP", 0, 0, 1)]
        [TestCase("GO DOWN", 0, 0, -1)]
        public void Moving_the_player(
            string command, int expectedX, int expectedY, int expectedZ)
        {
            var game = new Game();

            game.Act(command);

            Assert.That(game.Player.Coordinates, 
                Is.EquivalentTo(new[]{ expectedX, expectedY, expectedZ }));
        }

        [TestCase("GO N", "GO E", "GO S", 1, 0, 0)]
        [TestCase("GO W", "GO W", "GO W", -3, 0, 0)]
        [TestCase("GO UP", "GO UP", "GO UP", 0, 0, 3)]
        [TestCase("GO DOWN", "GO DOWN", "GO DOWN", 0, 0, -3)]
        public void Moving_in_different_directions(
            string command1, string command2, string command3, int expectedX, int expectedY, int expectedZ)
        {
            var game = new Game();

            game.Act(command1);
            game.Act(command2);
            game.Act(command3);

            Assert.That(game.Player.Coordinates, 
                Is.EquivalentTo(new[]{ expectedX, expectedY, expectedZ }));
        }

        [Test]
        public void When_player_looks_to_a_direction_then_location_does_not_change(){
            var game = new Game(new FakePrinter());
            game.Act("LOOK UP");
            Assert.That(game.Player.Coordinates, Is.EquivalentTo(new [] {0,0,0}));
        }

        [TestCase("UP", "title one", "description 1")]
        [TestCase("DOWN", "the ground", "some dusty weeds")]
        [TestCase("N", "the north", "some north birds")]
        [TestCase("S", "the south", "some south birds")]
        [TestCase("W", "the west", "some west snakes")]
        [TestCase("E", "the east", "some east snakes")]
        public void When_player_looks_then_what_they_see_is_printed(
            string direction, string expectedTitle, string expectedDescription){

            var fakePrinter = new FakePrinter();
            var game = new Game(fakePrinter);
            
            game.Act($"LOOK {direction}");

            Assert.That(fakePrinter.StuffIPrinted, Has.Count.GreaterThan(0));
            Assert.That(fakePrinter.StuffIPrinted.First().Title, Is.EqualTo(expectedTitle));
            Assert.That(fakePrinter.StuffIPrinted.First().Description, Is.EqualTo(expectedDescription));
        }

        [TestCase("N")]
        public void When_player_looks_at_non_existant_location(string direction)
        {
            var fakePrinter = new FakePrinter();
            var game = new Game(fakePrinter);
            game.Act("GO UP");
            game.Act("GO N");
            game.Act($"LOOK {direction}");
            var expectedTitle = "Not found location";
            var expectedDescription = "Nothing interesting to look at here";

            Assert.That(fakePrinter.StuffIPrinted, Has.Count.GreaterThan(0));
            Assert.That(fakePrinter.StuffIPrinted.First().Title, Is.EqualTo(expectedTitle));
            Assert.That(fakePrinter.StuffIPrinted.First().Description, Is.EqualTo(expectedDescription));
        }
    }


    public class FakePrinter : IPrintThings
    {
        public List<Location> StuffIPrinted = new List<Location>();
        public void Print(Location location)
        {
            StuffIPrinted.Add(location);
        }
    }
}