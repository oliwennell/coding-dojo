using katacombs;
using NUnit.Framework;

namespace Tests
{
    public class PlayerTests
    {
        [Test]
        public void When_game_starts_player_is_at_origin()
        {
            var player = new Player();
            Assert.That(player.Coordinates, 
                Is.EquivalentTo(new[]{0,0,0}));
        }

        [Test]
        public void When_a_player_has_an_empty_bag()
        {
            var player = new Player();
            Assert.That(player.ViewBag(), Is.EqualTo("Your bag contains: Nothing!")); 
        }

        [Test]
        public void When_a_player_adds_stuff_to_their_bag()
        {
            var player = new Player();
            player.Take("Corpse");
            Assert.That(player.ViewBag(), Is.EqualTo("Your bag contains: Corpse!"));
        }

        [Test]
        public void When_a_player_adds_multiple_items_to_their_bag(){
            var player = new Player();
            player.Take("Key");
            player.Take("Beer");
            player.Take("Corpse");
            Assert.That(player.ViewBag(), Is.EqualTo("Your bag contains: Key, Beer, Corpse!"));
        }


        [Test]
        public void When_a_player_adds_duplicated_items_to_their_bag(){
            var player = new Player();
            player.Take("Beer");
            player.Take("Beer");
            player.Take("Corpse");
            Assert.That(player.ViewBag(), Is.EqualTo("Your bag contains: 2x Beer, Corpse!"));
        }

    }
}