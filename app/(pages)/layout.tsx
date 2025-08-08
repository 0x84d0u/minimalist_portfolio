import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Page from "@/components/ui/Page";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-col min-h-svh">
        <Header />
        <Page>
            {children}
        </Page>
        <Footer />
    </div>
}