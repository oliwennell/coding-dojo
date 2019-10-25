using System.Collections.Generic;
using System;

namespace Project
{
    public class Game
    {
        public List<Card> Deck { get; set; }

        public Game()
        {
            Deck = CreateDeck();
        }

        private List<Card> CreateDeck()
        {
            var initialDeck = new List<Card>();
            for (int i = 2; i < 15; i++)
            {
                foreach (Suit suit in (Suit[]) Suit.GetValues(typeof(Suit)))
                {
                    var card = new Card(i, suit);
                    initialDeck.Add(card);
                }
            }
            return initialDeck;
        }

        public Card Deal()
        {
            var rnd = new Random();
            int i = rnd.Next(0, Deck.Count - 1);
            var card = Deck[i];
            Deck.RemoveAt(i);

            return card;
        }
    }
}