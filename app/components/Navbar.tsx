import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/logo.png'
import { AuthModal } from "./AuthModal"
export function Navbar(){
    return (
        <div className="flex py-5 items-center justify-between">
           <Link href="/" className="flex items-center gap-2">
           
           <Image src={Logo} alt="logo" className="size-10"></Image>
<h4 className="etxt-3xl font-semibold">
  Dev<span className="text-blue-500">Cal</span>

</h4>
           </Link>

          <AuthModal></AuthModal>
        </div>
    )
}