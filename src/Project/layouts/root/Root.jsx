import { Outlet } from "react-router-dom";
import Navber from "../../sharedFile/navber/Navber";
import Footer from "../../sharedFile/footer/Footer";

const Root = () => {
    return (
        <div>
            <Navber />
            <div className="min-h-[calc(100vh-290px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;