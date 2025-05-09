"use client";

import { CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { SubmitButton } from "./SubmitButtons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { SettingsAction } from "../actions";
import { parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { settingsSchema } from "../lib/zodSchemas";
import { useForm } from "@conform-to/react";
import { UploadDropzone } from "../lib/uploadthing";
import { toast } from "sonner";
import { X } from "lucide-react";

interface iAppProps{
    fullName:string;
    email:string,
    profileImage:string;
}

export function SettingsForm({fullName,email,profileImage}:iAppProps){
   
   const [lastResult,action]=useFormState(SettingsAction,undefined)
   const [currentProfileImage,setCurrentProfileImage] =useState(profileImage);

   const [form,fields]  =useForm({
    lastResult,

    onValidate({formData}){
        return parseWithZod(formData,{
            schema:settingsSchema,
          
        })
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
   })

   const handleDeleteImage=()=>{
    setCurrentProfileImage("");
   }
   return (      
   <Card>
        <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
        </CardHeader>

        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate >
            <CardContent className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <Label>Full Name</Label>
                    <Input name={fields.fullName.name} key={fields.fullName.key} defaultValue={fullName} placeholder="Devesh Kesharwani"></Input>
                    <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input disabled defaultValue={email} placeholder="dev@kirt.com"></Input>
                </div>

                <div className="grid gap-y-5">
                    <Label>Profile Image</Label>

                    <input type="hidden" name={fields.profileImage.name} key={fields.profileImage.key} value={currentProfileImage}></input>
                    {currentProfileImage ? (
                       <div className="relative size-16"><img src={currentProfileImage} alt="Profile Image" className="size-16 rounded-lg"></img>
                       <Button onClick={handleDeleteImage} variant="destructive"  size="icon" type="button" className="absolute -top-3 -right-3"><X className="size-4"></X></Button>
                       </div> 
                    ):(
                       <UploadDropzone onClientUploadComplete={(res)=>{
                        setCurrentProfileImage(res[0].url);
                        toast.success("Profile Image uploaded successfully");
                       }} 
                       onUploadError={(error)=>{
                        console.log("something went wrong",error);
                        toast.error(error.message);
                       }}
                       endpoint="imageUploader"></UploadDropzone>
                    )}
                    <p className="text-red-500 text-sm">{fields.profileImage.errors}</p>
                </div>
            </CardContent>
            <CardFooter><SubmitButton text="Save Changes"></SubmitButton></CardFooter>
        </form>
    </Card>
   )
}