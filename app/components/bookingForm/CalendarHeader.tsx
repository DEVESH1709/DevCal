import { type CalendarState } from "react-stately";

import {FocusableElement,DOMAttributes} from "@react-types/shared"
import { type AriaButtonProps} from "@react-aria/button";
import { useDateFormatter } from "@react-aria/i18n";
import { VisuallyHidden} from "@react-aria/visually-hidden";
import { CalendarButton } from "./CalendarButton";
import { ChevronLeft } from "lucide-react";

export function CalendarHeader({state,calendarProps,prevButtonProps,nextButtonProps,}:{
    state: CalendarState;
    calendarProps :DOMAttributes<FocusableElement>
    prevButtonProps: AriaButtonProps<"button">;
    nextButtonProps: AriaButtonProps<"button">;

}){
    const monthDateFormatter = useDateFormatter({
        month:"short",
        year:"numeric",
        timeZone:state.timeZone,

    });
    const [monthName, _, year]= monthDateFormatter.formatToParts(state.visibleRange.start.toDate(state.timeZone)).map((part)=> part.value);

    return (
        <div className="flex items-center">

             <VisuallyHidden>
                <h2>{calendarProps["aria-label"]}</h2>
             </VisuallyHidden>
             <h2 className=" font-semibold fkex-1 ">

                {monthName} <span className="text-muted-foreground text-sm font-medium">{year}</span>
             </h2>

             <div className="flex items-center gap-2">
                <CalendarButton {...prevButtonProps}>
                    <ChevronLeft className="size-4"></ChevronLeft>
                </CalendarButton>
                <CalendarButton {...nextButtonProps}>
                    <ChevronLeft className="size-4"></ChevronLeft>
                </CalendarButton>
             </div>
        </div>
    )
}