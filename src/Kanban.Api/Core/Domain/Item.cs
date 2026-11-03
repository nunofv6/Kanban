public class Item
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required Priority Priority { get; set; }
    public required Status Status { get; set; }
    public int BoardId { get; set; }
    public Board Board { get; set; } = null!;
}