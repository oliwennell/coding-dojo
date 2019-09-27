using System.Collections.Generic;

namespace Project
{
    public class CardComparer : IEqualityComparer<Card>
    {
        public bool Equals(Card x, Card y)
        {
            return x.Value == y.Value;
        }

        public int GetHashCode(Card obj)
        {
            return obj.Value;
        }
    }
}