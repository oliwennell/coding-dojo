using System;
using System.Collections.Generic;

namespace katacombs
{
    public class GameObject
    {
        public string Name { get; }
    }

    public class Location
    {
        public string Title { get; }
        public string Description { get; }

        public List<GameObject> Objects { get; }

        public Location(string title, string description)
        {
            Title = title;
            Description = description;
        }

        public override string ToString() => $"{Title}, {Description}";
    }
}
