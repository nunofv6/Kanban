import type { Board } from "@/api/types"
import { useEffect, useState } from "react"
import { getBoardById } from "./boardsApi"

export function useBoard(id: number) {
    const [board, setBoard] = useState<Board>()

    useEffect(() => {

        getBoardById(id)
            .then(response => setBoard(response))
    }, [id])

    return { board }
}