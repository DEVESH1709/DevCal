import { Ban } from "lucide-react";
import Link from "next/link";
import { Button} from "./ui/button";

interface iAppProps {
    title :string;
    description:string;
    buttonText: string;
    href: string;
}
export function EmptyState({buttonText, description , href, title} :iAppProps) {
    return (
        <div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border border-dashed p-8 text  text-center animate-in fade-in-50">
<div className="flex item-center justify-center size-20 rounded-full bg-primary/10">
<Ban className="size-10 text-primary"></Ban>
</div>
<h2 className=" mt-6 text-xl font-semibold">{title}</h2>
<p className="mb-8 mt-2 text-sm text-muted--foreground max-w-xs mx-auto">{description}</p>


<Button asChild>
    <Link href>
   { buttonText}</Link>
</Button>
        </div>
    )
}

 