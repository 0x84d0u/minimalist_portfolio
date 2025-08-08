import profile from "@/data/profile";
import Container from "./ui/Container";
import NavItem from "./ui/NavItem";
import Text from "./ui/typo";

export default function Header() {
    const navigation = [
        { label: "About", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/projects" },
        // { label: "Contact", href: "/contact" }
    ]
    return <header className="pt-12">
        <Container>
            <div className="flex flex-col gap-3 laptop:flex-row laptop:justify-between laptop:items-center">
                <div>
                    <div className="flex items-end gap-1">
                    <Text.Display text={profile.firstName + " " + profile.lastName} />
                    {/* <Text.Link className="font-bolder text-sm" text={"Aka. " +  profile.aka} /> */}

                    </div>
                    <Text.Body className="text-sm" text={profile.roles.join(" | ")} />
                </div>
                <div className="flex gap-3">
                    {navigation.map((i, x) => <NavItem key={x} {...i} />)}
                </div>
            </div>
        </Container>
    </header>
}