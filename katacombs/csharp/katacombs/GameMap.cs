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
            {"0,0,0", new Location("title zero", "description 0")},
            {"0,0,1", new Location("title one", "description 1")}
        };
    }

}