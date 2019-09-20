using Project;
using NUnit.Framework;

namespace Tests
{
    public class CardTests
    {
        [Test]
        public void CardHasAValue()
        {
            var card = new Card(10, Suit.Diamonds);

            Assert.That(card.Value, Is.EqualTo(10));
        }

        [Test]
        public void CardHasASuit()
        {
            var card = new Card(10, Suit.Diamonds);
            Assert.That(card.Suit, Is.EqualTo(Suit.Diamonds));
        }
    }
}