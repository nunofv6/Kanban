public class UpdateBoardDto
{
    public required string Title { get; set; }

    public void ApplyToEntity(Board board)
    {
        board.Title = Title;
    }
}