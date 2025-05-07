import { requireUser } from "@/app/lib/hooks";
import { CardContent, CardHeader, CardTitle ,Card,CardDescription} from "@/components/ui/card";
import { Switch } from "@radix-ui/react-switch";



async function getData(userId:string ){
    const data =await prisma.availability.findMany({
        where:{
            userId:userId,
        },
    });

    if(!data){
        return notFound();
    }
return data;
}
export default async function AvailabilityRoute(){
const session =await requireUser()
    const data= await getData(session.user?.id as string)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>
                    In this section you can manage your Availability!
                </CardDescription>
            </CardHeader>
            <form><CardContent className="flex flex-col gap-y-4">
        {data.map((item)=>{
            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
                <div className="flex items-center gap-x-3"> 
                    <Switch defaultChecked={item.isActive}></Switch>
                    <p>{item.day}</p>
                </div>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Fron Time">
                            <SelectContent>
                                <SelectGroup></SelectGroup>
                            </SelectContent>
                        </SelectValue>
                    </SelectTrigger>
                </Select>
            </div>
        })}
                </CardContent></form>
        </Card>
    )
}