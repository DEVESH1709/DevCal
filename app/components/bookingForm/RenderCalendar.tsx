"use client"

import { Calendar } from "./Calendar"
import {CalendarProps,DateValue,CalendarDate} from '@react-types/calendar'
import {today,getLocalTimeZone,parseDate} from "@internationalized/date"
import { useEffect } from "react";
import { useParams } from "next/navigation";

interface iAppProps {
    availability:{
        day:string;
        isActive:boolean;
    }[];
}
export function RenderCalendar({availability}:iAppProps){
         const searchParams = useSearchParams();
         const router = useRouter()
    
    const [date,setDate] = useState(()=>{

            const dateParam = searchParams.get("date");
            return dateParam ? parseDate(dateParam): today (getLocalTimeZone());
       })   
useEffect(()=>{
  const dateParam = searchParams.get("date");

  if(dateParam){
    setDate(parseDate(dateParam));

  }
},[searchParams]);
 const handleDateChange = (date :DateValue)=>{
     setDate(date as CalendarDate);
      const url = new URL(window.location.href);

      url.searchParams.set("date",date.toString());

      router.push(url.toString());
 }
    const isDateUnavailable =(date:DateValue)=>{
         const dayOfWeek  = date.toDate(getLocalTimeZone()).getDay();
         const adjustedIndex = dayOfWeek ===0 ?6 : dayOfWeek-1;
         return !availability[adjustedIndex].isActive;
    }

return <Calendar minValue={today(getLocalTimeZone())} isDateUnavailable={isDateUnavailable} value={date} onChange={handleDateChange}></Calendar>
}                                                                                   