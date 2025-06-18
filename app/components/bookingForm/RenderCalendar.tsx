"use client"

import { Calendar } from "./Calendar"

import {today,getLocalTimeZone} from "@internationalized/date"

interface iAppProps {
    availability:{
        day:string;
        isActive:boolean;
    }[];
}
export function RenderCalendar({availability}:iAppProps){4
    
    return <Calendar minValue={today(getLocalTimeZone())}></Calendar>
}