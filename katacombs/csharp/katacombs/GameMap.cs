using System.Collections.Generic;

namespace katacombs
{
    
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

}