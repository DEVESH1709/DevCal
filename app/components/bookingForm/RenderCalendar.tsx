"use client"

import { Calendar } from "./Calendar"
import {CalendarProps,DateValue} from '@react-types/calendar'
import {today,getLocalTimeZone} from "@internationalized/date"

interface iAppProps {
    availability:{
        day:string;
        isActive:boolean;
    }[];
}
export function RenderCalendar({availability}:iAppProps){
    
    const isDateUnavailable =(date:DateValue)=>{
         const dayOfWeek  = date.toDate(getLocalTimeZone()).getDay();
         const adjustedIndex = dayOfWeek ===0 ?6 : dayOfWeek-1;
         return !availability[adjustedIndex].isActive;
    }

return <Calendar minValue={today(getLocalTimeZone())} isDateUnavailable={isDateUnavailable}></Calendar>
}                                                                                   