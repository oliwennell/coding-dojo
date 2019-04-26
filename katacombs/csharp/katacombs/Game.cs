namespace katacombs
{
    public class Game
    {
        public Player Player { get; set; }
        public GameMap GameMap { get; set; }
        private IPrintThings printer;

        public Game(IPrintThings printer = null)
        {
            this.printer = printer;
            Player = new Player();
            GameMap = new GameMap();
        }

        public void Act(string command)
        {
            var direction = command.Split(' ')[1];
            if (command.StartsWith("GO")) {
                Move(direction);
            }
            else if (command.StartsWith("LOOK")){
                Look(direction);
            }
        
        }

        private void Move(string direction){
            switch (direction)
            {
                case "W": Player.MoveWest(); break;
                case "E": Player.MoveEast(); break;
                case "S": Player.MoveSouth(); break;
                case "N": Player.MoveNorth(); break;
                case "DOWN": Player.MoveDown(); break;
                case "UP": Player.MoveUp(); break;
            }
        }

        private void Look(string direction){            
            var title = this.GameMap.GetTitle(this.Player.Coordinates);
            var description = this.GameMap.GetDescription(this.Player.Coordinates);
            printer.Print(new Location(title, description));
        }
    }
}