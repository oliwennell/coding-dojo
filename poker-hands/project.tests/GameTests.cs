using Project;
using NUnit.Framework;
using System.Linq;
using System.Collections.Generic;
using System;

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
        public void Check_that_the_game_has_2_players()
        {
            var game = new Game(2);
            Assert.That(game.Players.Length, Is.EqualTo(2));
        }

        [Test]
        public void Deal_removes_card()
        {
            var game = new Game();
            var dealtCards = new List<Card>();
            for (int i = 51; i >= 0; i--)
            {
                var dealtCard = game.Deal(game.Players[0]);
                Assert.That(dealtCard, Is.TypeOf(typeof (Card)));
                Assert.That(game.Deck.Count, Is.EqualTo(i));
                Assert.That(dealtCards.Any(card => card.Value == dealtCard.Value && card.Suit == dealtCard.Suit), Is.False);
                Assert.That(game.Deck.Any(card => card.Value == dealtCard.Value && card.Suit == dealtCard.Suit), Is.False);
                dealtCards.Add(dealtCard);
            }
            Assert.That(game.Deck.Count, Is.EqualTo(0));
        }

        [Test]
        public void DealAddsCardToPlayersHand()
        {
            var game = new Game(2);
            game.Deal(game.Players[0]);
            Assert.That(game.Players[0].Hand.Cards.Count, Is.EqualTo(1));
        }

        [Test]
        public void StartingGame()
        {
            //deal 10 cards, 5 to each player
            var game = new Game();
            game.Start();

            Assert.That(game.Players[0].Hand.Cards.Count, Is.EqualTo(5));
            Assert.That(game.Players[1].Hand.Cards.Count, Is.EqualTo(5));
        }

        [Test]
        public void Winning()
        {
            var game = new Game(randometer: () => 0);
            game.Start();
            var list = game.Players[0].Hand.Cards.ToList();
            Assert.Multiple(() => {
            foreach (var card in list)
            {
                Console.WriteLine($"Player 1: {card.Value} of {card.Suit}");
            }
            list = game.Players[1].Hand.Cards.ToList();
            foreach (var card in list)
            {
                Console.WriteLine($"Player 2: {card.Value} of {card.Suit}");
            }
            Assert.Fail();
            });
        }
    }
}