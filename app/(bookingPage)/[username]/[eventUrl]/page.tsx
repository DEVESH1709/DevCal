import prisma from "@/app/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarX2 } from "lucide-react";
import { notFound } from "next/navigation";



async function getData(eventUrl :string,userName:string){
    const data =await prisma.eventType.findFirst({
       where:{
        url:eventUrl,
        User:{
           userName:userName 
        },
        active:true,
       },
       select:{
        id:true,
        description:true,
        title:true,
        duration:true,
        videoCallSoftware:true,
        User:{
            select:{
                image:true,
                name:true,
                availability:{
                    select:{
                        day:true,
                        isActive:true,
                    },
                },
            },
        },
       },
    });

    if(!data){
        return notFound();
    }
    return data;
}




export default async function BookingFormRoute({params}:{params:{username:string,eventUrl:string}}){

    const data= await getData(params.eventUrl,params.username);
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card className="max-w-[1000px] w-full mx-auto">
                <CardContent className="p-5 md:grid-cols-[1fr,auto,1fr,auto,1fr]">
                    <div><img src={data.User?.image as string} alt="Profile Image of User" className="size-10 rounded-full"></img>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{data.User?.name}</p>
                    <h1 className="text-xl font-semibold mt-2">{data.title}</h1>
                    <p className="text-sm font-medium text-muted-foreground">{data.description}</p>
                   <div className="mt-5 flex flex-col gap-y-3">
                    <p><CalendarX2 className="size-4 mr-2 text-primary"></CalendarX2></p>
                   </div>
                   
                   
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}