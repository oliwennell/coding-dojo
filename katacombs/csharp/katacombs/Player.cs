namespace katacombs
{
    public class Player
    {
        public int[] Coordinates { get; private set; }
        public Player()
        {
            Coordinates = new int[]{0,0,0};
        }

        public void Move(string direction) {
            Coordinates = katacombs.Coordinates.Calculate(Coordinates, direction);
        }        
    }
}