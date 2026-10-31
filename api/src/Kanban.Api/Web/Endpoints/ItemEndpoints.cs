public static class ItemEndpoints
{
    public static void Map(RouteGroupBuilder api)
    {
        var items = api.MapGroup("/items");

        items.MapGet("/", async (ItemService itemService) =>
        {
            return Results.Ok(await itemService.GetAllItems());
        });

        items.MapGet("/{id}", async (int id, ItemService itemService) =>
        {
            Item? item = await itemService.GetItemById(id);
            if (item is null)
            {
                return Results.NotFound();
            }

            return Results.Ok(item);
        });

        items.MapPost("/", async (CreateItemDto itemDto, ItemService itemService) =>
        {
            Item item = await itemService.CreateItem(itemDto);
            return Results.Created($"/items/{item.Id}", item);
        });

        items.MapPut("/{id}", async (int id, UpdateItemDto itemDto, ItemService itemService) =>
        {
            Item? item = await itemService.UpdateItem(id, itemDto);
            if (item is null)
            {
                return Results.NotFound();
            }

            return Results.NoContent();
        });
    }
}