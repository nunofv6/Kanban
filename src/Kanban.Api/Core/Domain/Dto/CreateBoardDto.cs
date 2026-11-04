public class CreateBoardDto
{
    public required string Title { get; set; }

    public Board MapToEntity() => new() { Title = Title };
}