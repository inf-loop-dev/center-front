import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <div className='header'>
                <Header></Header>
            </div>

            <div className='main'>
                <Outlet/>
            </div>

            <div className='footer'>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;