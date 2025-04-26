import { auth } from "../lib/auth";
import { redirect } from "next/navigation";
import { requireUser } from "../lib/hooks";

export default async function Dashboard() {
 const session= await requireUser();
 
    return (
        <>
        <h1>devesh</h1>
        </>
    );
}
