import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "./ui/dialog"
import { PRIORITIES, type CreateItemRequest, type Priority } from "@/api/types"
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Form } from "@base-ui/react";

export default function CreateItemDialog({ onCreate }: { onCreate: (item: CreateItemRequest) => Promise<void> }
) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>('Medium')

    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const priorityItems = PRIORITIES.map(p => ({ value: p, label: p }))

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setSaving(true)
        setError(null)
        try {
            await onCreate({ title, description, priority })
            setTitle('')
            setDescription('')
            setPriority('Medium')
            setError(null)
            setOpen(false)
        } catch {
            setError('Could not create the item. Please try again.')
        } finally {
            setSaving(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button/>}>
                <Plus/>Add Item
            </DialogTrigger>
            <DialogContent>
                <Form className="contents" onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>
                            Add Item
                        </DialogTitle>
                    </DialogHeader>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Title</FieldLabel>
                                <Input 
                                    id="title" 
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    required 
                                />
                            </Field>
                            <Field>
                                <FieldLabel>Description</FieldLabel>
                                <Input 
                                    id="description" 
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel>Priority</FieldLabel>
                                <Select 
                                    items={priorityItems}
                                    value={priority}
                                    onValueChange={value => setPriority(value as Priority)}
                                >
                                    <SelectTrigger className="w-45">
                                        <SelectValue placeholder="Select Priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        {priorityItems.map(item => (
                                            <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </Field>      
                        </FieldGroup>

                        {error && <p className="text-sm text-destructive">{error}</p>}

                        <DialogFooter>
                            <Button type="submit" disabled={saving}>
                                {saving ? 'Creating…' : 'Create'}
                            </Button>
                        </DialogFooter>
                    </Form>
            </DialogContent>
        </Dialog>
    )

}