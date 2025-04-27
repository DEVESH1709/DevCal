"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import { Loader2} from "lucide-react";
import Image from "next/image";
export function GoogleAuthButton() {
   const{ pending} =useFormStatus();
   
   
    return (
       <>
       {pending ?(
        <Button disabled variant="outline" className="w-full">
        <Loader2 className="size-4 mr-2 animate-spin"> Please wait</Loader2>
        </Button>
       ):(
        <Button variant="outline" className="w-full" >
         <Image src={GoogleLogo} alt="Google logo" className="size-4 mr-2"></Image>
            Sign in with Google
        </Button>
       )
    
    
    
    }
       
       </>
    )
}