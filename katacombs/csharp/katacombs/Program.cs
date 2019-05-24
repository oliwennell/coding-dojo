using System;

namespace katacombs
{
    public static class Program
    {
        public class RealPrinter : IPrintThings
        {
            public void Print(string location)
            {
                Console.WriteLine(location.ToString());
            }

            public void PrintError(string message)
            {
                Console.WriteLine(message);
            }
        }

        public static void Main(string[] args)
        {
            var game = new Game(new RealPrinter());
            string command = "";
            do
            {
                command = Console.ReadLine();
                game.Act(command);
            }
            while (command != "exit");
        }
    }
}