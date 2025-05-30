// import Image from "next/image";
import { redirect } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth";
export default async function Home() {

  const session =await auth()
  if(session?.user){
    redirect("/dashboard")
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
    </div>
  ); 
}
