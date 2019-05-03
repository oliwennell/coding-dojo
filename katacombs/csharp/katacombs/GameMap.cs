using System.Collections.Generic;

namespace katacombs
{
    
    public class GameMap
    {
        public string GetTitle(int[] coordinates)
        {
            return Location[$"{coordinates[0]},{coordinates[1]},{coordinates[2]}"].Title;
        }
        public string GetDescription(int[] coordinates)
        {
            return Location[$"{coordinates[0]},{coordinates[1]},{coordinates[2]}"].Description;
        }

        Dictionary<string, Location> Location = new Dictionary<string,Location> {

            {"0,0,-1", new Location("the ground", "some dusty weeds")},
            {"0,0,0", new Location("title zero", "description 0")},
            {"0,0,1", new Location("title one", "description 1")},
            {"1,0,0", new Location("the east", "some east snakes")},
            {"-1,0,0", new Location("the west", "some west snakes")},
            {"0,1,0", new Location("the north", "some north birds")},
            {"0,-1,0", new Location("the south", "some south birds")}
        };
    }

}