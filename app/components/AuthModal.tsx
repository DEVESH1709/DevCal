import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogTrigger,DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import Logo from '@/public/logo.png'
import { signIn } from "../lib/auth";
import { GoogleAuthButton } from "./SubmitButtons";
import { GitHubAuthButton } from "./SubmitButtons";
export function AuthModal(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try for Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">

                <DialogHeader className="flex flex-row justify-center items-center gap-x-2">
                    <Image src={Logo} alt="Logo" className="size-10"/>  
                        <h4 className="text-3xl font-semibold">

                            Dev<span className="text-primary">Cal</span>
                        </h4>
                  
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                  <form  action={async ()=>{
                    "use server"
                    await signIn ("google");
                  }}
                  className="w-full"><GoogleAuthButton></GoogleAuthButton>
                    </form>  
                    <form action={async ()=>{
                        "use server"
                        await signIn("github")
                    }}>
                        <GitHubAuthButton></GitHubAuthButton>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}