import type { CreateItemRequest, Item } from "@/api/types"
import { useEffect, useState } from "react"
import { createItem, deleteItem, getAllItemsByBoardId } from "./itemsApi"

export function useItems(boardId: number) {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getAllItemsByBoardId(boardId)
            .then(response => setItems(response))
    }, [boardId])

    const addItems = async (body: CreateItemRequest) => {
        const created = await createItem(boardId, body)
        setItems(prev => [...prev, created])
    }

    const removeItem = async (id: number) => {
        await deleteItem(boardId, id)
        setItems(prev => prev.filter(item => item.id !== id))
    }

    return { items, addItems, removeItem }
}