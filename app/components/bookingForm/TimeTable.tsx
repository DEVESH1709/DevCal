import {format} from "date-fns";


interface iAppProps{
    selectedDate :Date;
}


export function TimeTable({selectedDate}:iAppProps){
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