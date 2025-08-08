
import { redirect } from "next/navigation";

const redirection = async () => {
    redirect("/projects")
}

export default async function ProjectPage() {
    await redirection();
    return;
}