export type Board = {
    id: number
    title: string
    createdAt: string
}

export type Item = {
    id: number
    title: string
    description: string
    priority: Priority
    status: Status
}

export type CreateBoardRequest = {
    title: string
}

export type CreateItemRequest = {
    title: string
    description: string
    priority: Priority
}

export type UpdateItemRequest = {
    title: string
    description: string
    priority: Priority
    status: Status
}

export const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'] as const
export type Priority = (typeof PRIORITIES)[number]

export const STATUS = ['ToDo', 'InProgress', 'Done'] as const
export type Status = (typeof STATUS)[number]