export default function Page(props: { children: React.ReactNode }) {
    return (
        <div className="flex-1 flex flex-col gap-24 py-24">
            {props.children}
        </div>
    );
    
}