import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "./ui/dialog"
import { type CreateBoardRequest } from "@/api/types"
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Form } from "@base-ui/react";

export default function CreateBoardDialog({ onCreate }: { onCreate: (board: CreateBoardRequest) => Promise<void> }
) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');

    const [saving, setSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setSaving(true)
        setError(null)
        try {
            await onCreate({ title })
            setTitle('')
            setError(null)
            setOpen(false)
        } catch {
            setError('Could not create the board. Please try again.')
        } finally {
            setSaving(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button/>}>
                <Plus/>Add Board
            </DialogTrigger>
            <DialogContent>
                <Form className="contents" onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>
                            Add Board
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