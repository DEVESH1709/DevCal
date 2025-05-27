import { Card, CardDescription, CardHeader,CardContent , CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectContent, SelectItem } from "@radix-ui/react-select";



export default function NewEventRoute(){
    return (
        <div className="w-full h-full flex flex-1 itens-center justify-center">
            <Card>
                <CardHeader >
                    <CardTitle>Add new appointment type</CardTitle>
                    <CardDescription>
                        Create new appointment type that allows people to book you!
                    </CardDescription>
                </CardHeader>

                <form>
                    <CardContent className="grid gap-y-5"><div><Label>Title</Label>
                    <Input placeholder="30 Minute meeting"></Input>
                    </div>
                    <div className="flex flex-col gap-y-2"><Label>URL SLUG</Label>
                    <div className="flex rounded-md">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">DevCal.com </span>
                        <Input className="rounded-l-none" placeholder="Example-url-1"></Input>
                    </div>
                    </div>

                    <div className="flex flex-col gap-y-2">

                        <Label>Description</Label>
                        <Textarea placeholder="Meet me in this meeting to meet me! "></Textarea>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <Label>Duration</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select duration"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                               <SelectGroup>
                                <SelectLabel>Duration</SelectLabel>
                                <SelectItem value="15">15 Mins</SelectItem>
                               </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    )
}