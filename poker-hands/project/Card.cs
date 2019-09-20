namespace Project
{
    public class Card
    {
        public readonly int Value;
        public readonly Suit Suit;
        public Card(int value, Suit suit)
        {
            Value = value;
            Suit = suit;
        }
    }
}