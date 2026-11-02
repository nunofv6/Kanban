import type { CreateItemRequest, Item } from "@/api/types"
import { useEffect, useState } from "react"
import { createItem, getItems } from "./itemsApi"

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

    return { items, addItems }
}