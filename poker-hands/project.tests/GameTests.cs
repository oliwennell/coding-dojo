using Project;
using NUnit.Framework;
using System.Linq;
using System.Collections.Generic;

namespace project.tests
{
    public class GameTests
    {
        [Test]
        public void Check_that_the_game_has_a_deck_of_52_cards()
        {
            var game = new Game();
            Assert.That(game.Deck.Count, Is.EqualTo(52));
            Assert.That(game.Deck[0].Value, Is.EqualTo(2));
            Assert.That(game.Deck[0].Suit, Is.EqualTo(Suit.Clubs));
            Assert.That(game.Deck[51].Value, Is.EqualTo(14));
            Assert.That(game.Deck[51].Suit, Is.EqualTo(Suit.Spades));
        }

        [Test]
        public void Deal_removes_card()
        {
            var game = new Game();
            var dealtCards = new List<Card>();
            for (int i = 51; i >= 0; i--)
            {
                var dealtCard = game.Deal();
                Assert.That(dealtCard, Is.TypeOf(typeof (Card)));
                Assert.That(game.Deck.Count, Is.EqualTo(i));
                Assert.That(dealtCards.Any(card => card.Value == dealtCard.Value && card.Suit == dealtCard.Suit), Is.False);
                Assert.That(game.Deck.Any(card => card.Value == dealtCard.Value && card.Suit == dealtCard.Suit), Is.False);
                dealtCards.Add(dealtCard);
            }
            Assert.That(game.Deck.Count, Is.EqualTo(0));
        }
    }
}