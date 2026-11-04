public static class ItemEndpoints
{
    public static void Map(RouteGroupBuilder api)
    {
        var items = api.MapGroup("/boards/{boardId}/items");

        items.MapGet("/", async (int boardId, ItemService itemService) =>
        {
            return Results.Ok(await itemService.GetAllItemsByBoardId(boardId));
        })
        .WithName("GetAllItemsByBoardId");

        items.MapGet("/{itemId}", async (int boardId, int itemId, ItemService itemService) =>
        {
            Item? item = await itemService.GetItemById(boardId, itemId);
            if (item is null)
            {
                return Results.NotFound();
            }

            return Results.Ok(item);
        })
        .WithName("GetItemByBoardIdAndId");

        items.MapPost("/", async (int boardId, CreateItemDto itemDto, ItemService itemService) =>
        {
            Item item = await itemService.CreateItem(boardId, itemDto);
            return Results.CreatedAtRoute("GetItemById", new { boardId, itemId = item.Id }, item);
        })
        .WithName("CreateItem");

        items.MapPut("/{itemId}", async (int boardId, int itemId, UpdateItemDto itemDto, ItemService itemService) =>
        {
            Item? item = await itemService.UpdateItem(boardId, itemId, itemDto);
            if (item is null)
            {
                return Results.NotFound();
            }

            return Results.NoContent();
        })
        .WithName("UpdateItem");

        items.MapDelete("/{itemId}", async (int boardId, int itemId, ItemService itemService) =>
        {
            bool res = await itemService.DeleteItem(boardId, itemId);
            if (!res)
            {
                return Results.NotFound();
            }
            
            return Results.NoContent();
        })
        .WithName("DeleteItem");
    }
}