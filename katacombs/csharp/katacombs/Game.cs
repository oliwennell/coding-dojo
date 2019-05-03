using System.Linq;

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

            var lookingAtCoordinates = this.Player.Coordinates.ToArray();
            
            switch (direction)
            {
                case "DOWN": lookingAtCoordinates[2]--; break;
                case "UP": lookingAtCoordinates[2]++; break;
                case "W": lookingAtCoordinates[0]--; break;
                case "E": lookingAtCoordinates[0]++; break;
                case "S": lookingAtCoordinates[1]--; break;
                case "N": lookingAtCoordinates[1]++; break;
            }
            
            var title = this.GameMap.GetTitle(lookingAtCoordinates);
            var description = this.GameMap.GetDescription(lookingAtCoordinates);
            printer.Print(new Location(title, description));
        }
    }
}