namespace katacombs
{
    public class Player
    {
        public Player()
        {
            Coordinates = new int[]{0,0,0};
        }

        public void Move(string command)
        {
            switch(command.Split(' ')[1]) 
            {
                case "W":
                    Coordinates[0] --;
                    break;
                case "E":
                    Coordinates[0] ++;
                    break;
                case "S":
                    Coordinates[1] --;
                    break;
                case "N":
                    Coordinates[1] ++;
                    break;
                case "DOWN":
                    Coordinates[2] --;
                    break;
                case "UP":
                    Coordinates[2] ++;
                    break;
        
            }
        }

        public int[] Coordinates { get; }
    }
}