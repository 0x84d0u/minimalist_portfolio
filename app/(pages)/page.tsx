import Section from "@/components/ui/Section"
import Text from "@/components/ui/typo"
import Link from "next/link"

import profile from "@/data/profile"
const { description, githubLink, linkedinLink, email} = profile

export default function AboutPage() {
  const about = description.map((i, x) => <Text.Body key={x}>{i}</Text.Body>);
  const github = <Link href={githubLink}> <Text.Link>Github</Text.Link> </Link>;
  const linkedIn =  <Link href={linkedinLink}> <Text.Link>LinkedIn</Text.Link> </Link>
  const emailMe =  <Link href='#'><Text.Link>{email}</Text.Link></Link>
  return <>
    <Section>
      <div className="space-y-6">
        {about}
        <Text.Body>
          You can find me on {github}, connect on {linkedIn}, or just say hi at {emailMe}.
          Let’s build something cool.
        </Text.Body>
      </div>
    </Section>
  </>
}