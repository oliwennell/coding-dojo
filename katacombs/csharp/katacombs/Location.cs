using System;

namespace katacombs
{
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
