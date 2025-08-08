import Link from "next/link";
import Text from "./typo";

export default function NavItem(props: {
    href: string;
    label: string;
}) {
    return <Link href={props.href}>
        <Text.Nav text={props.label} isActive={false} />
    </Link>
}