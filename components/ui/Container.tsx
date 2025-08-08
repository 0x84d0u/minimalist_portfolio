export default function Container(props: { children: React.ReactNode }) {
    return (
        <div className="max-w-[900px] mx-auto px-6">
            {props.children}
        </div>
    );

}