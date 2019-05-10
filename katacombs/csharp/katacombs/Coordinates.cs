
using System.Linq;

namespace katacombs
{
    public static class Coordinates
    {
        public static int[] Calculate(int[] coordinates, string direction)
        {
            var newCoordinates = coordinates.ToArray();

            switch (direction)
            {
                case "W": newCoordinates[0]--; break;
                case "E": newCoordinates[0]++; break;
                case "S": newCoordinates[1]--; break;
                case "N": newCoordinates[1]++; break;
                case "DOWN": newCoordinates[2]--; break;
                case "UP": newCoordinates[2]++; break;
            }

            return newCoordinates;
        }
    }
}