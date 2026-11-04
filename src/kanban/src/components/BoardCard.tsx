import { Ellipsis, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import type { Board } from "@/api/types";
import { Link } from "react-router";

export default function BoardCard({ board, onRemove }: { board: Board, onRemove: (id: number) => Promise<void> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="min-w-0 truncate pt-1">{board.title}</CardTitle>
                <CardAction>
                    <DropdownMenu>
                        <DropdownMenuTrigger render={<Button variant={"ghost"}/>}>
                            <Ellipsis/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => onRemove(board.id)}><Trash/>Delete</DropdownMenuItem>
                                <DropdownMenuItem><Pencil/>Edit</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>
            <CardContent className="pb-1">
                <Button render={<Link to={`/boards/${board.id}`}/>}>Go to board</Button>
            </CardContent>
        </Card>
    )
}