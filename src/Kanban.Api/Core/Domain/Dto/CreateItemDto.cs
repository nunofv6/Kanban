public class CreateItemDto
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required Priority Priority { get; set; }

    public Item MapToEntity(int boardId) => new() { Title = Title, Description = Description, Priority = Priority, Status = Status.ToDo, BoardId = boardId };
}