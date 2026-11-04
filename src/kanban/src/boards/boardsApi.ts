import type { Board, CreateBoardRequest } from '@/api/types.ts'
import { api } from '../api/client.ts'

const getBoards = () => api.get<Board[]>('/boards')
const getBoardById = (id: number) => api.get<Board>(`/boards/${id}`)
const createBoard = (body: CreateBoardRequest) => api.post<Board>('/boards', body)
const updateBoard = (id: number, body: CreateBoardRequest) => api.put<Board>(`/boards/${id}`, body)
const deleteBoard = (id: number) => api.delete(`/boards/${id}`)

export { getBoards, getBoardById, createBoard, updateBoard, deleteBoard }