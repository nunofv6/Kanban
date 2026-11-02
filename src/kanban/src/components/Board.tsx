import { useItems } from "@/items/useItems"
import CreateItemDialog from "./CreateItemDialog"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Board() {
    const { items, addItems } = useItems()

    const columns = [
        { status: 'ToDo', title: 'To Do' },
        { status: 'InProgress', title: 'In Progress' },
        { status: 'Done', title: 'Done' },
    ] as const

    return (
        <div className="flex h-screen flex-col bg-background">

        <header className="flex items-center justify-between border-b px-6 py-4">
            <h1 className="text-xl font-semibold">Kanban Board</h1>
            <CreateItemDialog onCreate={addItems}/>
        </header>

        <main className="flex flex-1 gap-4 overflow-x-auto p-6">
            {columns.map(column => (
            <section
                key={column.status}
                className="flex flex-1 flex-col rounded-xl bg-muted/50"
            >
                <div className="flex items-center justify-between px-4 py-3">
                    <h2 className="text-sm font-semibold">{column.title}</h2>
                </div>

                <div className="flex w-40 flex-col gap-2 overflow-y-auto px-3 pb-3">
                    {items.filter(item => item.status === column.status).map(item => (
                        <Card key={item.id}>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            ))}
        </main>
        </div>
    )
    
}