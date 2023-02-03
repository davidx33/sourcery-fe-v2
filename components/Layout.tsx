import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="bg-slate-100">
                <div className="min-h-screen">
                    <Navbar />
                    <div className="md:px-16 px-8">
                        <main>{children}</main>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;