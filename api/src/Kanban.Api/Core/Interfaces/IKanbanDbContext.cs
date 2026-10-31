using Microsoft.EntityFrameworkCore;

public interface IKanbanDbContext
{
    DbSet<Item> Items { get; set; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}