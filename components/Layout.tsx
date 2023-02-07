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
                    <div className="px-10 md:px-20">
                        <main>{children}</main>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;