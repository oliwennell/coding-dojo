using System;
using System.Linq;
using System.Collections.Generic;

namespace Project
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
            var distinctCount = Cards.Distinct(new CardComparer()).Count();

            Console.WriteLine(distinctCount);

            switch (distinctCount)
            {
                case 5:
                    return HandleFiveDistinctValue();
                case 4:
                    return TypeOfHand.OnePair;
                case 3:
                    return HandleThreeDistinctValues();
                default:
                    return TypeOfHand.HighCard;
            }
        }

        public TypeOfHand HandleThreeDistinctValues()
        { 

             var results = Cards.GroupBy(c => c.Value).ToDictionary(card => card.Key, card => card.Count());

             if (results.Values.Max() == 3) {
                 return TypeOfHand.ThreeOfKind;
             }
             
            return TypeOfHand.TwoPairs;

        }

        public TypeOfHand HandleFiveDistinctValue(){
            int maxValue = Cards.Max( x => x.Value);
            int minValue = Cards.Min( x => x.Value);

            if ((maxValue-minValue) == 4){
                return TypeOfHand.Straight;
            } 
            return TypeOfHand.HighCard;
        }
    }
}