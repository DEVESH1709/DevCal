
import {useCalendarGrid,useLocale} from "react-aria";
import {getWeeksInMonth} from "@internationalized/date";
export function CalendarGrid(){
    let {locale} =useLocale();
    let {gridProps, headerProps,weekDays} =useCalendarGrid(props, state);
return (
    <table {...gridProps}>
<thead {...headerProps}>
  <tr>
    {weekDays.map((day,index)=>(
        <th key={index}>{day}</th>
    ))}
  </tr>
</thead>
<tbody>
    {[...new Array(weeksInMonth).keys()].map((weekIndex)=>(
        <tr key={weekIndex}>
            {state
            .getDatesInWeek(weekIndex)
            .map((date,i)=>
            date ? (
                <CalendarCell key={i} state={state} date={date}></CalendarCell>
            ):(
                <id key={i}></id>
            )
            )
            }
        </tr>
    ))}
</tbody>
    </table>
)
}