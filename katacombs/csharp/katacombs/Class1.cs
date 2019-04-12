using System;
using System.Collections.Generic;

namespace katacombs
{
    public static class Class1
    {
        public static int MeaningOfLife() => 42;
    }

    public class Player
    {
        public Player()
        {
            Position = new int[]{0,0,0};
        }

        public int[] Position { get; }
    }

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

    public class GameMap
    {
        public string GetTitle(int[] location)
        {
            return Location[$"{location[0]},{location[1]},{location[2]}"].Title;
        }
        public string GetDescription(int[] location)
        {
            return Location[$"{location[0]},{location[1]},{location[2]}"].Description;
        }

        Dictionary<string, Location> Location = new Dictionary<string,Location> {
            {"0,0,0", new Location("title zero", "description 0")},
            {"0,0,1", new Location("title one", "description 1")}
        };
    }

    public class Location
    {
        public string Title { get; }
        public string Description { get; }

        public Location(string title, string description)
        {
            Title = title;
            Description = description;
        }
    }
}
