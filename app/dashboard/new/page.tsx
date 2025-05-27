"use client"

import { Card, CardDescription, CardHeader,CardContent , CardTitle,CardFooter } from "@/components/ui/card"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectGroup } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectContent, SelectItem, SelectLabel } from "@/components/ui/select";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { useState } from "react";
import { SubmitButton } from "@/app/components/SubmitButtons";
import Link from "next/link";

import { useFormState } from "react-dom";

type VideoCallProvider = "Zoom Meeting" | "Google Meet" | "Microsoft Teams";


export default function NewEventRoute(){
    const [activePlatform,setActivePlatform] =useState<VideoCallProvider>("Google Meet");
    const [lastResult,action]=useFormState(CreateEventTypeAction,undefined)
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
                                <SelectItem value="30">30 Mins</SelectItem>
                                <SelectItem value="45">45 Mins</SelectItem>
                                <SelectItem value="60">1 Mins</SelectItem>
                               </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-y-2">
                        <Label>Video Call Provider</Label>
                        <ButtonGroup  >
                            <Button type="button" onClick={ ()=>setActivePlatform("Zoom Meeting")} className="w-full" variant={activePlatform==="Zoom Meeting"? "secondary":"outline"}>Zoom</Button>
                             <Button  type="button"  onClick={ ()=>setActivePlatform("Google Meet")} className="w-full" variant={activePlatform==="Google Meet"? "secondary":"outline"}>Google Meet</Button>

                              <Button type="button"  onClick={ ()=>setActivePlatform("Microsoft Teams")}className="w-full" variant={activePlatform==="Microsoft Teams"? "secondary":"outline"}>Microsoft Teams</Button>
                        </ButtonGroup>
                    </div>
                    </CardContent>

                    <CardFooter className="w-full flex justify-between">
                        <Button variant="secondary" asChild>
                            <Link href="/dashboard"></Link>
                        </Button>
                        <SubmitButton text="Create event type"></SubmitButton>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}