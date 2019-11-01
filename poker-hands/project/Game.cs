using System.Collections.Generic;
using System;

namespace Project
{
    public class Game
    {
        public List<Card> Deck { get; set; }
        public Player[] Players { get; }
        private Func<int> randometer;


        public Game(int numberOfPlayers = 2, Func<int> randometer = null)
        {
            Deck = CreateDeck();
            Players = new Player[numberOfPlayers];
            for (var i=0; i<numberOfPlayers; i++)
            {
                Players[i] = new Player();
            }

            this.randometer = randometer ?? new Func<int>(() => new Random().Next(0, Deck.Count - 1));
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

        public void Start()
        {
            for (var i=0; i<5; i++)
            {
                foreach (var player in Players)
                {
                    Deal(player);
                }
            }
        }

        public Card Deal(Player player)
        {
            var rnd = new Random();
            int i = randometer();
            var card = Deck[i];
            Deck.RemoveAt(i);
            player.Hand.Cards.Add(card);

            return card;
        }
    }
}