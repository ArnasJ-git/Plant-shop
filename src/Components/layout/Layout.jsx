import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import TopBanner from "./TopBanner";
import Footer from "./Footer";


export default function Layout() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';



    return (
        <div className="container">
            <div>
                <TopBanner />
                <Header />
            </div>
            <main className="main-content">
                <Outlet />
            </main>
            <Footer isHomePage={isHomePage} />
            

        </div>
    )
}
