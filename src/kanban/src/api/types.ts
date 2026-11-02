export type Item = {
    id: number
    title: string
    description: string
    priority: Priority
    status: Status
}

export type CreateItemRequest = {
    title: string
    description: string
    priority: Priority
}

export const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'] as const
export type Priority = (typeof PRIORITIES)[number]

export const STATUS = ['ToDo', 'InProgress', 'Done'] as const
export type Status = (typeof STATUS)[number]