using System;
using System.Linq;
using System.Collections.Generic;

namespace Project
{
    public class PokerHand
    {
        public readonly List<Card> Cards;
        public int Score;


        public PokerHand(Card[] cards)
        {
            Cards = cards.ToList();
        }

        public PokerHand()
        {
            Cards = new List<Card>();
        }

        public TypeOfHand GetTypeofHand()
        {
            var distinctCount = Cards.Distinct(new CardComparer()).Count();

            switch (distinctCount)
            {
                case 5:
                    return HandleFiveDistinctValue();
                case 4:
                    return TypeOfHand.OnePair;
                case 3:
                    return HandleThreeDistinctValues();
                case 2:
                    return HandleTwoDistinctValues();
                default:
                    return TypeOfHand.HighCard;
            }
        }

        public TypeOfHand HandleTwoDistinctValues()
        {
            var results = Cards.GroupBy(c => c.Value).ToDictionary(card => card.Key, card => card.Count());

            if (results.Values.Max() == 4)
            {
                return TypeOfHand.FourOfKind;
            }
            return TypeOfHand.FullHouse;

        }

        public TypeOfHand HandleThreeDistinctValues()
        {
            var results = Cards.GroupBy(c => c.Value).ToDictionary(card => card.Key, card => card.Count());

            return results.Values.Max() == 3 ? TypeOfHand.ThreeOfKind : TypeOfHand.TwoPairs;
        }

        public TypeOfHand HandleFiveDistinctValue()
        {

            if (IsRoyalFlush())
            {
                return TypeOfHand.RoyalFlush;
            }

            if (IsStraightFlush())
            {
                return TypeOfHand.StraightFlush;
            }

            if (IsStraight())
            {
                return TypeOfHand.Straight;
            }

            if (IsFlush())
            {
                return TypeOfHand.Flush;
            }

            return TypeOfHand.HighCard;
        }

        public bool IsStraightFlush() => IsStraight() && IsFlush();

        public bool IsRoyalFlush() => Cards.Max(x => x.Value) == 14 && IsStraightFlush();

        public bool IsStraight() => ContainsLowStraight() || ContainsNormalStraight();

        public bool ContainsNormalStraight()
        {
            return (Cards.Max(x => x.Value) - Cards.Min(x => x.Value)) == 4;
        }

        public bool ContainsLowStraight()
        {
            return Cards.Any(x => x.Value == 2) &&
                Cards.Any(x => x.Value == 3) &&
                Cards.Any(x => x.Value == 4) &&
                Cards.Any(x => x.Value == 5) &&
                Cards.Any(x => x.Value == 14);
        }

        public bool IsFlush()
        {
            List<Suit> SuitList = new List<Suit>();
            foreach (var item in Cards)
            {
                SuitList.Add(item.Suit);
            }

            return AreAllSuitsTheSame(SuitList);
        }

        public bool AreAllSuitsTheSame(List<Suit> allSuits) => allSuits.All(x => x == Cards[0].Suit);
    }
}