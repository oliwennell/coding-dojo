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
    }

}