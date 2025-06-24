import prisma from "@/app/lib/db";
import {format} from "date-fns";

async function getData(userName:string){
    const data =await prisma.availability.findFirst({
        where:{
            day:"Monday",
            User:{
                userName:userName,
            },
        },
        select :{
            firstTime:true,
            tillTime:true,
            id:true,
            User:{
                grantEmail:true,
                grant:true,
            }
        }
    });
    return data;
}

interface iAppProps{
    selectedDate :Date;
    userName:string;
}


export async function TimeTable({selectedDate,userName}:iAppProps){
    const data =await getData(userName);
    return(
        <div>
            <p className="text-base font-semibold">{format(selectedDate,"EEE")}{" "}
                <span className="text-sm text-muted-foreground">
                    {format(selectedDate,"MMM. d")}
                </span>


            </p>
        </div>
    )
}