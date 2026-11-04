using Microsoft.EntityFrameworkCore;

public class ItemService(IKanbanDbContext db)
{
    public async Task<List<Item>> GetAllItemsByBoardId(int boardId)
    {
        return await db.Items.Where(i => i.BoardId == boardId).ToListAsync();
    }

    public async Task<Item?> GetItemById(int boardId, int itemId)
    {
        return await db.Items.FirstOrDefaultAsync(i => i.Id == itemId && i.BoardId == boardId);
    }

    public async Task<Item> CreateItem(int boardId, CreateItemDto itemDto)
    {
        Item item = itemDto.MapToEntity(boardId);
        db.Items.Add(item);
        
        await db.SaveChangesAsync();
        return item;
    }

    public async Task<Item?> UpdateItem(int boardId, int itemId, UpdateItemDto itemDto)
    {
        Item? item = await db.Items.FirstOrDefaultAsync(i => i.Id == itemId && i.BoardId == boardId);

        if (item is null)
        {
            return null;
        }
        
        itemDto.ApplyToEntity(item);

        await db.SaveChangesAsync();
        return item;
    }

    public async Task<bool> DeleteItem(int boardId, int itemId)
    {
        Item? item = await db.Items.FirstOrDefaultAsync(i => i.Id == itemId && i.BoardId == boardId);

        if (item is null)
        {
            return false;
        }

        db.Items.Remove(item);
        await db.SaveChangesAsync();
        return true;
    }
}