import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/typo";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const getProjectData = async (id: string) => {
    if (!id) {
        throw new Error("Project id is required");
    }
    const project = projects.find(p => p.id === id);
    if (!project) {
        throw new Error(`Project with id "${id}" not found`);
    }
    if (project.hidden === true) {
        throw new Error(`Project with id "${id}" is hidden`);
    }
    return project;
}


export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProjectData(id);

    if (!project) {
        return <Page>
            <Section>
                <Text.Display text="Project not found" />
                <Text.Body text="The project you are looking for does not exist." />
                <Link href="/projects"><Text.Link text="Back to projects" /></Link>
            </Section>
        </Page>;
    }

    const {
        category,
        status,
        title,
        tagline,
        links,
        overview,
        technologies,
        futureImprovements,
        keyFeatures,
        whatLearned,
        gallery
    } = project;
    const imageUrl = `/projects/${id}.jpg`;


    return <Page>
        <Section>
            <Link href='/projects'>
                <Text.Nav text="← Back to projects" />
            </Link>
        </Section>

        <Section >

            <div className="flex  flex-col-reverse gap-12 desktop:gap-6 desktop:flex-row">
                <div className="bg-bg2 relative w-full aspect-square desktop:w-36 rounded-[0.5rem] overflow-hidden">
                    <Image
                        fill
                        alt={title}
                        src={imageUrl}
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <Text.Display text={title} />
                        <Text.Body className="text-lg" text={tagline} />

                    </div>
                    <div className="space-x-6">
                        {links?.map((i, x) => <Link key={x} href={i.href}><Text.Link text={i.label} /></Link>)}
                    </div>
                </div>
            </div>
        </Section>

        <Section>
            <div className="space-y-6">
                <div>
                    {overview.map((i, x) => <Text.Body key={x} text={i} />)}
                </div>

            </div>
        </Section>
        <Section heading="Key features">
            <ul>
                {keyFeatures.map((i, x) => <Text.Body As={'li'} key={x} text={i} />)}
            </ul>
        </Section>




        {technologies && <Section heading="Technologies Used">
            {technologies.map((i, x) => <Text.Body key={x} text={i} />)}
        </Section>}

        {gallery && "Gallery here"}
        

        {whatLearned && <Section heading="What i have learned">
            {whatLearned.map((i, x) => <Text.Body key={x} text={i} />)}
        </Section>}

        {futureImprovements && <Section heading="Future improvements">
            {futureImprovements.map((i, x) => <Text.Body key={x} text={i} />)}
        </Section>}


    </Page>
}