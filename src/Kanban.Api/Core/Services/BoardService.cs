using Microsoft.EntityFrameworkCore;

public class BoardService(IKanbanDbContext db)
{
    public async Task<List<Board>> GetAllBoards()
    {
        return await db.Boards.ToListAsync();
    }

    public async Task<Board?> GetBoardById(int id)
    {
        return await db.Boards.FindAsync(id)
            is Board board ? board : null;
    }

    public async Task<Board> CreateBoard(CreateBoardDto boardDto)
    {
        Board board = boardDto.MapToEntity();
        db.Boards.Add(board);
        
        await db.SaveChangesAsync();
        return board;
    }

    public async Task<Board?> UpdateBoard(int id, UpdateBoardDto boardDto)
    {
        Board? board = await db.Boards.FindAsync(id);

        if (board is null)
        {
            return null;
        }
        
        boardDto.ApplyToEntity(board);

        await db.SaveChangesAsync();
        return board;
    }

    public async Task<bool> DeleteBoard(int id)
    {
        Board? board = await db.Boards.FindAsync(id);

        if (board is null)
        {
            return false;
        }

        db.Boards.Remove(board);
        await db.SaveChangesAsync();
        return true;
    }
}