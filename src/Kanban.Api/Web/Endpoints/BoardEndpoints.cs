public static class BoardEndpoints
{
    public static void Map(RouteGroupBuilder api)
    {
        var boards = api.MapGroup("/boards");

        boards.MapGet("/", async (BoardService boardService) =>
        {
            return Results.Ok(await boardService.GetAllBoards());
        })
        .WithName("GetAllBoards");

        boards.MapGet("/{boardId}", async (int boardId, BoardService boardService) =>
        {
            Board? board = await boardService.GetBoardById(boardId);
            if (board is null)
            {
                return Results.NotFound();
            }

            return Results.Ok(board);
        })
        .WithName("GetBoardById");

        boards.MapPost("/", async (CreateBoardDto boardDto, BoardService boardService) =>
        {
            Board board = await boardService.CreateBoard(boardDto);
            return Results.Created($"/boards/{board.Id}", board);
        })
        .WithName("CreateBoard");

        boards.MapPut("/{boardId}", async (int boardId, UpdateBoardDto boardDto, BoardService boardService) =>
        {
            Board? board = await boardService.UpdateBoard(boardId, boardDto);
            if (board is null)
            {
                return Results.NotFound();
            }

            return Results.NoContent();
        })
        .WithName("UpdateBoard");

        boards.MapDelete("/{boardId}", async (int boardId, BoardService boardService) =>
        {
            bool res = await boardService.DeleteBoard(boardId);
            if (!res)
            {
                return Results.NotFound();
            }
            
            return Results.NoContent();
        })
        .WithName("DeleteBoard");
    }
}