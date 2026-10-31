using Microsoft.EntityFrameworkCore;

public class KanbanDbContext(DbContextOptions<KanbanDbContext> options) : DbContext(options), IKanbanDbContext
{
    public DbSet<Item> Items { get; set; }
}