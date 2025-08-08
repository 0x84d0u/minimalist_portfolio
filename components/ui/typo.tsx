import { ClassNameValue, twMerge } from "tailwind-merge";

interface TextProps {
    children?: React.ReactNode;
    text?: React.ReactNode;
    className?: ClassNameValue;
    As?: React.ElementType
}
interface NavTextProps extends TextProps {
    isActive?: boolean;
}


export const text = {
    contentDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    contentDescriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
    titleLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    titleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    metaShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    metaLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
    longParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

const Text = {
    Display: (p: TextProps) => <h1 className={twMerge(p.className)}>{p.children || p.text}</h1>,
    SectionHeading: (p: TextProps) => <h2 className={twMerge(p.className)}>{p.children || p.text}</h2>,
    CardHeading: (p: TextProps) => <h3 className={twMerge(p.className)}>{p.children || p.text}</h3>,
    Label: (p: TextProps) => <label className={twMerge("font-bolder text-lg", p.className)}>{p.children || p.text}</label>,
    Body: ({className, children, text, As = 'p'}: TextProps) => <As className={twMerge(className)}>{children || text}</As>,
    Meta: (p: TextProps) => <p className={twMerge("text-txtMeta text-sm", p.className)}>{p.children || p.text}</p>,
    Nav: (p: NavTextProps) => <p className={twMerge("hover:text-txtLink", p.isActive ? 'text-txtHeading' : 'text-txtMeta', p.className)}>{p.children || p.text}</p>,
    Link: (p: TextProps) => <span className={twMerge("text-txtLink", p.className)} >{p.children || p.text}</span>,
}

export default Text;

