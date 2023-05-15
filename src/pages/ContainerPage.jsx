import { Outlet } from "react-router-dom";
import NavbarMain from "../components/NavbarMain";

const ContainerPage = () => {
    return (
        <div className="mx-auto max-w-screen-xl h-screen flex flex-col">
            <NavbarMain />
            <div className="flex-1 my-4">
                <Outlet />
            </div>
        </div>
    )
}

export default ContainerPage;
