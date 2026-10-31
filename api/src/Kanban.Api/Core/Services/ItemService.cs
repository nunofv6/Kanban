using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;

public class ItemService(IKanbanDbContext db)
{
    public async Task<List<Item>> GetAllItems()
    {
        return await db.Items.ToListAsync();
    }

    public async Task<Item?> GetItemById(int id)
    {
        return await db.Items.FindAsync(id)
            is Item item ? item : null;
    }

    public async Task<Item> CreateItem(CreateItemDto itemDto)
    {
        Item item = itemDto.MapToEntity();
        db.Items.Add(item);
        
        await db.SaveChangesAsync();
        return item;
    }

    public async Task<Item?> UpdateItem(int id, UpdateItemDto itemDto)
    {
        Item? item = await db.Items.FindAsync(id);

        if (item is null)
        {
            return null;
        }
        
        item.Title = itemDto.Title;
        item.Description = itemDto.Description;
        item.Priority = itemDto.Priority;
        item.Status = itemDto.Status;

        await db.SaveChangesAsync();
        return item;
    }
}