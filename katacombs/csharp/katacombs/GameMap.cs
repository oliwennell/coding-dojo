using System.Collections.Generic;

namespace katacombs
{
    
    public class GameMap
    {

        public GameMap(Dictionary<string,Location> location = null)
        {
            Location = location ?? Location;
        }

        public string GetTitle(int[] coordinates)
        {
            return Location[$"{coordinates[0]},{coordinates[1]},{coordinates[2]}"].Title;
        }
        public string GetDescription(int[] coordinates)
        {
            return Location[$"{coordinates[0]},{coordinates[1]},{coordinates[2]}"].Description;
        }

        public Location GetObstacle(int[] fromCoordinate, int[] toCoordinate){
            var coordinatesOne = $"{fromCoordinate[0]},{fromCoordinate[1]},{fromCoordinate[2]}";
            var coordinatesTwo = $"{toCoordinate[0]},{toCoordinate[1]},{toCoordinate[2]}";
            // var result = new string[] {coordinatesOne, coordinatesTwo};
            // result.Sort().Join(':')

            try{
              return Obstacles[$"{coordinatesOne}:{coordinatesTwo}"];  
            } catch{
                return null;
            }
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

        Dictionary<string, Location> Obstacles = new Dictionary<string,Location>{
            {"1,0,0:2,0,0", new Location("Ice wall", "Ice wall description")},
            {"1,-1,0:1,0,0", new Location("Locked door", "Locked door description")}
        };
    }

}