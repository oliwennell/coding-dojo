using System;

namespace Project
{
    public class Player
    {
        public PokerHand Hand {get; set;}

        public Player()
        {
            Hand = new PokerHand();
        }
    }
}
