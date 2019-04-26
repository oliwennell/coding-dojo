namespace katacombs
{
    public class Game
    {
        public Player Player { get; set; }
        public GameMap GameMap { get; set; }
        public Game()
        {
            Player = new Player();
            GameMap = new GameMap();
        }

        public void Act(string command)
        {
            switch(command.Split(' ')[1]) 
            {
                case "W": Player.MoveWest(); break;
                case "E": Player.MoveEast(); break;
                case "S": Player.MoveSouth(); break;
                case "N": Player.MoveNorth(); break;
                case "DOWN": Player.MoveDown(); break;
                case "UP": Player.MoveUp(); break;
            }
        }
    }

}