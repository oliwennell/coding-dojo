using System;
using System.Collections.Generic;

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
            AddPlayer(0);

            this.randometer = randometer ?? new Func<int>(() => new Random().Next(0, Deck.Count - 1));
        }

        private void AddPlayer(int index)
        {
            try
            {
                Players[index] = new Player();
                AddPlayer(index + 1);
            }
            catch
            {
                // I do nothing!
            }
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
            for (var i = 0; i < 5; i++)
            {
                foreach (var player in Players)
                {
                    Deal(player);
                }
            }
        }

        public Card Deal(Player player)
        {
            var card = GetCard();
            player.Hand.Cards.Add(card);
            return card;
        }

        private Card GetCard()
        {
            int i = randometer();
            var card = Deck[i];
            Deck.RemoveAt(i);
            return card;
        }
    }
}