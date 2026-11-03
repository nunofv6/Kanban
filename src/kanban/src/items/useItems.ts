import type { CreateItemRequest, Item } from "@/api/types"
import { useEffect, useState } from "react"
import { createItem, deleteItem, getItems } from "./itemsApi"

export function useItems() {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getItems()
            .then(response => setItems(response))
    }, [])

    const addItems = async (body: CreateItemRequest) => {
        const created = await createItem(body)
        setItems(prev => [...prev, created])
    }

    const removeItem = async (id: number) => {
        await deleteItem(id)
        setItems(prev => prev.filter(item => item.id !== id))
    }

    return { items, addItems, removeItem }
}