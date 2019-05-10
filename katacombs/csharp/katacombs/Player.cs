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

        public void MoveWest() => Coordinates[0] --;
        public void MoveEast() => Coordinates[0] ++;
        public void MoveSouth() => Coordinates[1] --;
        public void MoveNorth() => Coordinates[1] ++;
        public void MoveDown() => Coordinates[2] --;
        public void MoveUp() => Coordinates[2] ++;
        
    }
}