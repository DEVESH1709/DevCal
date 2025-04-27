
import Link from 'next/link';
import { HomeIcon, Users2, CalendarCheck, Settings } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from "lucide-react";
interface iAppProps{
    id:number;
    name:string;
    href:string;
    icon:ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> ;
}

export const dashboardLinks:iAppProps[]=[
    {
        id:0,
        name:"Event Types",
        href:"/dashboard",
        icon:HomeIcon,
    },
    {
        id:1,
        name:"Meetings",
        href:"/dashboard/meetings",
        icon:Users2,
    },
    {
        id:2,
        name:"Availablity",
        href:"/dashboard/availablity",
        icon:CalendarCheck,
    },
    {
        id:3,
        name:"Settings",
        href:"/dashboard/settings",
        icon:Settings,
    }
]

export default function DashboardLinks(){

return (
    <>
    {dashboardLinks.map((link)=>{
        <Link key={link.id} href={link.href}>
            <link.icon className='size-4'></link.icon>
            {link.name}
        </Link>
    })}
    </>
)
}