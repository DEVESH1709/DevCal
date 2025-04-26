import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/logo.png'
export function Navbar(){
    return (
        <div className="flex py-5 items-center justify-between">
           <Link href="/">
           <Image src= {Logo} alt="logo" className="size-10"></Image>
           </Link>
        </div>
    )
}