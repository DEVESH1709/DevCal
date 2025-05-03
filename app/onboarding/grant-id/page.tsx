import { CardDescription, CardHeader,CardContent } from "@/components/ui/card";
import { Card, CardTitle } from "@/components/ui/card";
import VideoGif from '@/public/work-is-almost-over-happy.gif'
import { CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function OnboardingrouteTwo(){
    return(
        <div className="min-h-screen w-screen flex items-center justify-center">

            <Card>
                <CardHeader>
                    <CardTitle>You are almost done </CardTitle>
                    <CardDescription></CardDescription>
                    <Image src={VideoGif} alt="Almost finish" className="w-full rounded-lg"></Image>
                </CardHeader>
                <CardContent>
                    <Button asChild className="w-full">
                        <Link href="/api/auth">
                        <CalendarCheck2 className="size-4 mr-2"></CalendarCheck2>
                        Connect Calender to your Account</Link>
                    </Button>
                </CardContent>

            </Card>
        </div>
    )
}