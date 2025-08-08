import website from "@/data/website";
import Container from "./ui/Container";
import Text from "./ui/typo";

export default function Footer() {
    return <footer className="bg-bg2 p-6">
        <Container>
            <div className="text-center">
                <Text.Body text={website.footer} />
            </div>
        </Container>
    </footer>
}