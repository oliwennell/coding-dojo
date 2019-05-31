using System.Collections.Generic;

namespace katacombs
{
    public class Player
    {
        public int[] Coordinates { get; private set; }
        private Dictionary<string, int> Bag { get; }

        public Player()
        {
            Coordinates = new int[]{0,0,0};
            Bag = new Dictionary<string, int>();
        }

        public void Move(string direction) {
            Coordinates = katacombs.Coordinates.Calculate(Coordinates, direction);
        }
        
        public string ViewBag()
        {
            if (Bag.Count == 0) {
                return "Your bag contains: Nothing!";
            } else {
                List<string> listOfItems = new List<string>();
                string formattedListOfItems = "";
                var bagKeys = Bag.Keys;
                foreach (var item in bagKeys)
                {
                    int value = Bag[item];
                        if (value > 1) 
                        {
                            listOfItems.Add($"{value}x {item}");
                        }
                        else
                        {
                            listOfItems.Add(item.ToString());
                        }
                }
                for (int i = 0; i < listOfItems.Count; i++)
                {
                   if(i == listOfItems.Count -1){
                       formattedListOfItems += listOfItems[i] + "!";
                   } else {
                       formattedListOfItems += listOfItems[i] + ", ";
                   }
                }
                return "Your bag contains: " + formattedListOfItems;
            }

            // change Bag to an empty dictionary
        }

        public void Take(string item)
        {
            int value;
            if (Bag.TryGetValue(item, out value))
            {
                Bag[item] += 1;
            }
            else
            {
                Bag.Add(item, 1);
            }
        }
    }
}