using System.Linq;

namespace katacombs
{
    public class PokerHand
    {
        public readonly Card[] Cards;
        public int Score;


        public PokerHand(Card[] cards)
        {
            Cards = cards;
        }

        public TypeOfHand GetTypeofHand()
        {
            if (HasThreeOfKind()) {
                return TypeOfHand.TwoPairs;
            }
            if (HasTwoPairs()) {
                return TypeOfHand.TwoPairs;
            }
            if (HasOnePair()) {
                return TypeOfHand.OnePair;
            }
            return TypeOfHand.HighCard;
        }
        private bool HasThreeOfKind()
        {
            return true;
        }
        private bool HasTwoPairs()
        {
            return true;
        }
        private bool HasOnePair()
        {
            return true;
        }
    }
}