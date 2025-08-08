import Section from "@/components/ui/Section";
import Text from "@/components/ui/typo";
import resume from "@/data/resume";

import { Education, Experience, Skill } from "@/data/types";

function ExperienceCard({
    title,
    location,
    content,
    contract,
    office,
    organisation,
    time
}: Experience) {
    const meta = [
        organisation,
        location,
        office,
        contract
    ].filter(v => v && v?.length > 0)

    return <div>
        <Text.Meta >{time}</Text.Meta>
        <div className="border-l pl-3 mt-2">
            <Text.Label text={title} />
            <Text.Body className='text-txtMeta'> {meta.length > 0 && meta.join(" · ")} </Text.Body>
            <ul className="space-y-0">
                {content.map((i, x) => <li key={x}> {i}</li>)}
            </ul>
        </div>
    </div>
}

function EducationCard({
    title,
    content,
    authenticity,
    org,
    time
}: Education) {
    return <div>
        {time && <Text.Meta >{time}</Text.Meta>}
        <div className="border-l pl-3 mt-2">
            <Text.Label text={title} />
            {org && <Text.Meta > {org}</Text.Meta>}
            <ul className="space-y-0">
                {content.map((i, x) => <li key={x}>{i}</li>)}
            </ul>

        </div>
    </div>
}

function SkillCard({ title, content }: Skill) {
    return <Text.Body><b>{title}:</b> {content.join(", ")}</Text.Body>
}



const { summary, experiences, educations, skills } = resume


export default async function ResumePage() {
    return <>

        <Section>
            <Text.Body className="text-lg" text={summary} />
        </Section>

        <Section heading="Experiences">
            <div className="space-y-12">
                {experiences.map((i, x) => <ExperienceCard key={x} {...i} />)}
            </div>
        </Section>

        <Section heading="Education">
            <div className="space-y-12">
                {educations.map((i, x) => <EducationCard key={x} {...i} />)}
            </div>
        </Section>

        <Section heading="Skills">
            <div className="">
                {skills.map((i, x) => <SkillCard key={x} {...i} />)}
            </div>
        </Section>

    </>
}