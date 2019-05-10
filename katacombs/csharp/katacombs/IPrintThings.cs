namespace katacombs
{
    public interface IPrintThings
    {
        void Print(Location location);

        void PrintError(string message);
    }
}

