import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function(){
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to Dev<span className="text-primary">Cal</span></CardTitle>

                    <CardDescription>We need the following information to set up your profile!</CardDescription>
                </CardHeader>
               <form >
               <CardContent className="flex flex-col gap-y-5">
                    <div className="griid gap-y-2">
                        <Label>Full Name</Label>
                        <Input placeholder="Devesh Kesharwani"></Input>
                    </div>
                    <div className="griid gap-y-2">
           <Label>UserName</Label>
           <div  className="flex rounded-up">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">DevCal.com</span>
          
          <input placeholder="example-user-1" className="rounded-l-none"></input>
           </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Submit</Button>
                </CardFooter>
               </form>
            </Card>
        </div>
    )
}