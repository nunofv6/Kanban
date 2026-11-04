import type { CreateBoardRequest, Board } from "@/api/types"
import { useEffect, useState } from "react"
import { createBoard, deleteBoard, getBoards } from "./boardsApi"

export function useBoards() {
    const [boards, setBoards] = useState<Board[]>([])

    useEffect(() => {
        getBoards()
            .then(response => setBoards(response))
    }, [])

    const addBoards = async (body: CreateBoardRequest) => {
        const created = await createBoard(body)
        setBoards(prev => [...prev, created])
    }

    const removeBoard = async (id: number) => {
        await deleteBoard(id)
        setBoards(prev => prev.filter(board => board.id !== id))
    }

    return { boards, addBoards, removeBoard }
}