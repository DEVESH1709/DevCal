import prisma from "@/app/lib/db";
import {format, parse} from "date-fns";
import {Prisma} from "@prisma/client";
import {nylas} from "@/app/lib/nylas";


async function getData(userName:string,selectedDate:Date){
    const currentDay =format(selectedDate,"EEEE");

    const startOfDay =new Date(selectedDate);
    startOfDay.setHours(0,0,0,0);  // hrs, minutes, seconds, milliseconds

    const endOfDay =new Date(selectedDate);
    endOfDay.setHours(23,59,59,999);  // hrs, minutes, seconds, milliseconds
    const data =await prisma.availability.findFirst({
        where:{
            day:currentDay as Prisma.EnumDayFilter,
            User:{
                userName:userName,
            },
        },
        select :{
            fromTime:true,
            tillTime:true,
            id:true,
            User:{
              select:  {
                grantEmail:true,
                grantId:true,
              },
            },
        },
    });


    const nylasCalendarData = await nylas.calendars.getFreeBusy({
        identifier: data?.User?.grantId as string,
        requestBody:{
   startTime :Math.floor(startOfDay.getTime()/1000),
    endTime :Math.floor(endOfDay.getTime()/1000),
    emails: [data?.User?.grantEmail as string],
        }
    })
    return {
        data,
        nylasCalendarData,
    };
}

interface iAppProps{
    selectedDate :Date;
    userName:string;
}

function calculateAvailableTimeSlots(){
    date:string,
    dbAvailability:{
        fromTime :string | undefined;
        tillTime :string | undefined;
    },
    nylasData:NylasResponse
    const now =new Date();
    const availableFrom = parse(
        `${date} ${dbAvailability.fromTime}`,"yyyy-MM-dd HH:mm",
        new Date()
    );

    const availableTill = parse(`${date} ${dbAvailability.tillTime}`,
        "yyyy-MM-dd HH:mm",
        new Date()
    );
    const busySlots = 

}

export async function TimeTable({selectedDate,userName}:iAppProps){
    const {data,nylasCalendarData} =await getData(userName,selectedDate);
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