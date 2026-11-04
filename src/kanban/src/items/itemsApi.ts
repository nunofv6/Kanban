import type { CreateItemRequest, Item, UpdateItemRequest } from '@/api/types.ts'
import { api } from '../api/client.ts'

const getAllItemsByBoardId = (boardId: number) => api.get<Item[]>(`/boards/${boardId}/items`)
const getItemByBoardIdAndId = (boardId: number, id: number) => api.get<Item>(`/boards/${boardId}/items/${id}`)
const createItem = (boardId: number, body: CreateItemRequest) => api.post<Item>(`/boards/${boardId}/items`, body)
const updateItem = (boardId: number, id: number, body: UpdateItemRequest) => api.put<Item>(`boards/${boardId}/items/${id}`, body)
const deleteItem = (boardId: number, id: number) => api.delete(`boards/${boardId}/items/${id}`)

export { getAllItemsByBoardId, getItemByBoardIdAndId, createItem, updateItem, deleteItem }