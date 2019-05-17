using katacombs;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Tests
{
    public class GameTests
    {
        public class Starting
        {
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
        }

        public class Moving
        {
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
        }

        public class Looking
        {
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
            [TestCase("S")]
            [TestCase("W")]
            [TestCase("E")]
            [TestCase("UP")]
            [TestCase("DOWN")]
            public void When_player_looks_at_non_existant_location(string direction)
            {
                var fakePrinter = new FakePrinter();
                var game = new Game(fakePrinter);
                game.Act("GO UP");
                game.Act("GO N");
                game.Act("GO UP");
                
                game.Act($"LOOK {direction}");
                var expectedTitle = "Not found location";
                var expectedDescription = "Nothing interesting to look at here";

                Assert.That(fakePrinter.StuffIPrinted, Has.Count.GreaterThan(0));
                Assert.That(fakePrinter.StuffIPrinted.First().Title, Is.EqualTo(expectedTitle));
                Assert.That(fakePrinter.StuffIPrinted.First().Description, Is.EqualTo(expectedDescription));
            }

            [TestCase("E", "Ice wall", "Ice wall description")]
            // [TestCase("S", "Locked door", "Locked door description")]
            public void When_players_look_and_the_path_is_blocked_by_an_obstacle(
                string direction, string expectedTitle, string expectedDescription){
                var fakePrinter = new FakePrinter();
                var game = new Game(fakePrinter);
                
                game.Act("GO E");
                game.Act($"LOOK {direction}");
                

                Assert.That(fakePrinter.StuffIPrinted, Has.Count.GreaterThan(0));
                Assert.That(fakePrinter.StuffIPrinted.First().Title, Is.EqualTo(expectedTitle));
                Assert.That(fakePrinter.StuffIPrinted.First().Description, Is.EqualTo(expectedDescription));

            }
        }

        public class Error_handling
        {
            [TestCase("PLOP 123", "I don't know how to PLOP 123")]
            [TestCase("GO 123", "I don't know how to GO 123")]
            [TestCase("GO123", "I don't know how to GO123")]
            public void When_player_inputs_incorrect_command_then_error_message_printed(
                string command,
                string expectedMessage
            ) {
                var fakePrinter = new FakePrinter();
                var game = new Game(fakePrinter);
                
                game.Act(command);

                Assert.That(fakePrinter.ErrorsPrinted, Has.Count.GreaterThan(0));
                Assert.That(fakePrinter.ErrorsPrinted.First(), Is.EqualTo(expectedMessage));
            }
        }
    }

    public class FakePrinter : IPrintThings
    {
        public List<Location> StuffIPrinted = new List<Location>();
        public List<string> ErrorsPrinted = new List<string>();
        public void Print(Location location)
        {
            StuffIPrinted.Add(location);
        }

        public void PrintError(string message)
        {
            ErrorsPrinted.Add(message);
        }
    }
}