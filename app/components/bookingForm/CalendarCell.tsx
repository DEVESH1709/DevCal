import {useRef} from "react";
import {useCalendarCell, useFocusRing, mergeProps} from "react-aria";
import {CalendarState} from "react-stately";
import {CalendarDate} from "@internationalize/date"
import { cn } from "@/lib/utils";
export function CalendarCell({
    state,
    date,
    currentMonth
}:{
    state:CalendarState;
   date:CalendarDate;
   currentMonth: CalendarDate;
}){
    let ref =useRef(null);
    let {
        cellProps,
        buttonProps,
        isSelected,
        isOutsideViisibleRange,
        isDisbled,
        isUnavailable,
        formattedDate,
    }= useCalendarCell({date}, state,ref);
    const {focusProps, isFocusVisible} = useFocusRing();
    return (
        <td {...cellProps} className={`py-0.5 px-0.5 relative ${isFocusVisible ? "z-10" : "z-0"}`}>
            <div {...mergeProps(buttonProps, focusProps)}
            ref={ref}
            className="size-10 outline-none group rounded-md"
            >
                <div className={cn("size-full rounded-sm flex items-center justify-center text-center text-sm font-semibold", isSelected? 'bg-primary text-white' :"")}>
              {formattedDate}
                </div>
            </div>

        </td>
    )
}