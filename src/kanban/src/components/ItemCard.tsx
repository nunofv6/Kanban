import { Ellipsis, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import type { Item } from "@/api/types";

export default function ItemCard({ item, onRemove }: { item: Item, onRemove: (id: number) => Promise<void> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="min-w-0 truncate">{item.title}</CardTitle>
                <CardAction>
                    <DropdownMenu>
                        <DropdownMenuTrigger render={<Button variant={"ghost"}/>}>
                            <Ellipsis/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={() => onRemove(item.id)}><Trash/>Delete</DropdownMenuItem>
                                <DropdownMenuItem><Pencil/>Edit</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p className="min-w-0 truncate">{item.description}</p>
            </CardContent>
        </Card>
    )
}