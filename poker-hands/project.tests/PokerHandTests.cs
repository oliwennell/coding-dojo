using Project;
using NUnit.Framework;

namespace Tests
{
    public class PokerHandTests
    {
        [Test]
        public void it_works()
        {
            Card[] cards = new Card[5] {
                new Card(14, Suit.Spades),
                new Card(7, Suit.Diamonds),
                new Card(2, Suit.Clubs),
                new Card(10, Suit.Spades),
                new Card(5, Suit.Hearts),
            };
            var hand = new PokerHand(cards);

            Assert.That(hand.Cards, Is.EqualTo(cards));
        }

        [TestCase()]
        public void HandCalculatesType_HighCard()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(7, Suit.Diamonds),
                new Card(2, Suit.Clubs),
                new Card(10, Suit.Spades),
                new Card(5, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.HighCard));
        }

        [TestCase()]
        public void HandCalculatesType_Pair()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(14, Suit.Diamonds),
                new Card(2, Suit.Clubs),
                new Card(10, Suit.Spades),
                new Card(5, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.OnePair));
        }

        [TestCase()]
        public void HandCalculatesType_TwoPairs()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(14, Suit.Diamonds),
                new Card(2, Suit.Clubs),
                new Card(2, Suit.Spades),
                new Card(5, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.TwoPairs));
        }

        [TestCase()]
        public void HandCalculatesType_ThreeOfKind()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(14, Suit.Diamonds),
                new Card(14, Suit.Clubs),
                new Card(3, Suit.Spades),
                new Card(5, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.ThreeOfKind));
        }

        [TestCase()]
        public void HandCalculatesType_Straight()
        {
            Card[] cards = new Card[5]
            {
                new Card(2, Suit.Spades),
                new Card(3, Suit.Diamonds),
                new Card(4, Suit.Clubs),
                new Card(5, Suit.Spades),
                new Card(6, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.Straight));
        }
    }
}