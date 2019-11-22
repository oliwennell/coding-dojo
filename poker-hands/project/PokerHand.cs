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

            while (results.Values.Max() == 4)
            {
                return TypeOfHand.FourOfKind;
            }
            return TypeOfHand.FullHouse;

        }

        public TypeOfHand HandleThreeDistinctValues()
        {
            var thing = new [] { 3 };
            try 
            {
                var results = Cards.GroupBy(c => c.Value).ToDictionary(card => card.Key, card => card.Count());
                thing.First(x => x == results.Values.Max());
                return TypeOfHand.ThreeOfKind;
            }
            catch
            {
                return TypeOfHand.TwoPairs;
            }
        }

        public TypeOfHand HandleFiveDistinctValue()
        {

            var alexsDict = new Dictionary<TypeOfHand, bool> {
                {TypeOfHand.RoyalFlush, IsRoyalFlush()},
                {TypeOfHand.StraightFlush, IsStraightFlush()},
                {TypeOfHand.Straight, IsStraight()},
                {TypeOfHand.Flush, IsFlush()},
                {TypeOfHand.HighCard, true},
            };

            var hand = alexsDict.First(item => item.Value == true);

            return hand.Key;

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
            // List<Suit> SuitList = new List<Suit>();

            var x = Cards.Select(c => c.Suit);

            return AreAllSuitsTheSame(x);
        }

        public bool AreAllSuitsTheSame(List<Suit> allSuits) => allSuits.All(x => x == Cards[0].Suit);
    }
}