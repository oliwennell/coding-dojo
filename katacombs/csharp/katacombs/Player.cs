namespace katacombs
{
    public class Player
    {
        public Player()
        {
            Coordinates = new int[]{0,0,0};
        }

        public void Act(string command)
        {
            switch(command.Split(' ')[1]) 
            {
                case "W": MoveWest(); break;
                case "E": MoveEast(); break;
                case "S": MoveSouth(); break;
                case "N": MoveNorth(); break;
                case "DOWN": MoveDown(); break;
                case "UP": MoveUp(); break;
            }
        }

        private void MoveWest() => Coordinates[0] --;
        private void MoveEast() => Coordinates[0] ++;
        private void MoveSouth() => Coordinates[1] --;
        private void MoveNorth() => Coordinates[1] ++;
        private void MoveDown() => Coordinates[2] --;
        private void MoveUp() => Coordinates[2] ++;
        
        public int[] Coordinates { get; }
    }
}