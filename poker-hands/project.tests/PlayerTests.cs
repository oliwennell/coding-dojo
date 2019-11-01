using Project;
using NUnit.Framework;
using System.Linq;
using System.Collections.Generic;

namespace project.tests
{
    public class PlayerTests
    {
        [Test]
        public void PlayerShouldHaveAHand()
        {
            var player = new Player();
            Assert.That(player.Hand, Is.TypeOf(typeof(PokerHand)));
        }
    }
        
}