

import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
// import './style.css'

export default function NavbarMain() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const navList = (
        <nav className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" id="navbar">
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                
            </Typography>           
        </nav>
    );

    return (
        <Navbar className="py-2 px-4 lg:px-8 lg:py-4 text-gray-950 bg-blue-gray-500">
            <nav className="container mx-auto flex items-center justify-between">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal uppercase"
                >Sitio de Consulta de Solmicro
                </Typography>
                {/* <div className="hidden lg:block">{navList}</div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block text-gray-950">
                    <span>Logout</span>
                </Button> */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </nav>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        {/* <span>Buy Now</span> */}
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}