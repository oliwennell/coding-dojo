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
    }
}