using Microsoft.EntityFrameworkCore;

public interface IKanbanDbContext
{
    DbSet<Board> Boards { get; set; }
    DbSet<Item> Items { get; set; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}