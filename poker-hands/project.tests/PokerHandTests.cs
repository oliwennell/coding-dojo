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
        public void HandCalculatesType_Straight_without_ace()
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

        [TestCase()]
        public void HandCalculatesType_Straight_with_low_ace()
        {
            Card[] cards = new Card[5]
            {
                new Card(2, Suit.Spades),
                new Card(3, Suit.Diamonds),
                new Card(4, Suit.Clubs),
                new Card(5, Suit.Spades),
                new Card(14, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.Straight));
        }

        [Test]
        public void HandCalculatesType_Straight_with_high_ace()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(13, Suit.Diamonds),
                new Card(12, Suit.Clubs),
                new Card(11, Suit.Spades),
                new Card(10, Suit.Hearts),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.Straight));
        }

        [Test]
        public void HandCalculatesType_Flush()
        {
            Card[] cards = new Card[5]
            {
                new Card(5, Suit.Spades),
                new Card(13, Suit.Spades),
                new Card(8, Suit.Spades),
                new Card(11, Suit.Spades),
                new Card(2, Suit.Spades),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.Flush));
        }


        [Test]
        public void HandCalculatesType_Four_Of_A_Kind()
        {
            Card[] cards = new Card[5]
            {
                new Card(13, Suit.Spades),
                new Card(13, Suit.Diamonds),
                new Card(13, Suit.Hearts),
                new Card(13, Suit.Clubs),
                new Card(2, Suit.Spades),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.FourOfKind));
        }
        [Test]
        public void HandCalculatesType_Full_House()
        {
            Card[] cards = new Card[5]
            {
                new Card(13, Suit.Spades),
                new Card(13, Suit.Diamonds),
                new Card(13, Suit.Hearts),
                new Card(2, Suit.Clubs),
                new Card(2, Suit.Spades),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.FullHouse));
        }

        [Test]
        public void HandCalculatesType_Straight_Flush()
        {
            Card[] cards = new Card[5]
            {
                new Card(2, Suit.Spades),
                new Card(3, Suit.Spades),
                new Card(4, Suit.Spades),
                new Card(5, Suit.Spades),
                new Card(6, Suit.Spades),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.StraightFlush));
        }

        [Test]
        public void HandCalculatesType_Royal_Flush()
        {
            Card[] cards = new Card[5]
            {
                new Card(14, Suit.Spades),
                new Card(13, Suit.Spades),
                new Card(12, Suit.Spades),
                new Card(11, Suit.Spades),
                new Card(10, Suit.Spades),
            };

            var hand = new PokerHand(cards);

            Assert.That(hand.GetTypeofHand(), Is.EqualTo(TypeOfHand.RoyalFlush));
        }
    }
}