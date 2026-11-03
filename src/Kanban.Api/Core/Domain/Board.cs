public class Board
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
    public List<Item> Items { get; set; } = [];
}