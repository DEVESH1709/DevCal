"use client";

import { CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { SubmitButton } from "./SubmitButtons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { SettingsAction } from "../actions";

interface iAppProps{
    fullName:string;
    email:string,
    profileImage:string;
}

export function SettingsForm({email,fullName,profileImage}:iAppProps){
   
   const [lastResult,action]=useFormState(SettingsAction,undefined)
   
   return (      
   <Card>
        <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
        </CardHeader>

        <form>
            <CardContent className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue={fullName} placeholder="Devesh Kesharwani"></Input>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input disabled defaultValue={email} placeholder="dev@kirt.com"></Input>
                </div>
            </CardContent>
            <CardFooter><SubmitButton text="Save Changes"></SubmitButton></CardFooter>
        </form>
    </Card>
   )
}