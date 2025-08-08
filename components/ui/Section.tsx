import { ClassNameValue, twMerge } from "tailwind-merge";
import Container from "./Container";
import Text from "./typo";


interface SectionProps {
    children: React.ReactNode;
    heading?: string;
    subheading?: string;
    className?: ClassNameValue
}


export default function Section({ children, heading, subheading, className }: SectionProps) {
    const showHeader = !!(heading || subheading);
    return (
        <section className={twMerge(className)}>
            <Container>
                {showHeader && <div className="mb-6">
                    {heading && <Text.SectionHeading text={heading} />}
                    {subheading && <Text.Meta text={subheading} />}
                </div>}
                {children}
            </Container>
        </section>
    );
}