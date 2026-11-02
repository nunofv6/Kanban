import type { CreateItemRequest, Item } from '@/api/types.ts'
import { api } from '../api/client.ts'

const getItems = () => api.get<Item[]>('/items')
const getItemById = (id: number) => api.get<Item>(`/items/${id}`)
const createItem = (body: CreateItemRequest) => api.post<Item>('/items', body)
const updateItem = (id: number, body: CreateItemRequest) => api.put<Item>(`/items/${id}`, body)
const deleteItem = (id: number) => api.delete(`items/${id}`)

export { getItems, getItemById, createItem, updateItem, deleteItem }