public class UpdateItemDto
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required Priority Priority { get; set; }
    public required Status Status { get; set; }

    public void ApplyToEntity(Item item)
    {
        item.Title = Title;
        item.Description = Description;
        item.Priority = Priority;
        item.Status = Status;
    }
}