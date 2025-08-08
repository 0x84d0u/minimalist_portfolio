import Section from "@/components/ui/Section";
import Text from "@/components/ui/typo";
import projects from "@/data/projects";
import { Project } from "@/data/types";
import Image from "next/image";
import Link from "next/link";


function ProjectCard({
    hidden,
    status,
    category,
    id,
    title,
    tagline: desc,
    overview: description,
    technologies,
    links,

}: Project) {
    const link = `/p/${id}`;
    const imageUrl = `/projects/${id}.jpg`;

    return <Link href={link} className="flex flex-col items-center gap-3">
        <div className="bg-bg2 relative w-full aspect-square rounded-[0.5rem] overflow-hidden">
            <Image 
                fill
                alt={title}
                src={imageUrl}

            />
        </div>
        <div>
            <Text.Label text={title} />
            <Text.Body text={desc} />
            {technologies && <Text.Meta text={technologies.join(", ")} />}
        </div>
    </Link>
}

export default function ResumePage() {
    
    function renderSection(category: Project['category']) {
        const data = projects
        .filter(project => project.category === category && project.hidden !== true)
        if (data.length < 1) return null;
        const heading = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
        return <Section heading={heading} subheading={`${data.length} projects`}>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-12 ">
            {data.map((item, i) => <ProjectCard key={i} {...item} />)}

            </div>
        </Section>
    }

    return <>
        {renderSection('PORTFOLIO')}
        {renderSection('PROFESSIONAL')}
        {renderSection('PERSONAL')}
        {renderSection('OTHER')}
    </>
}