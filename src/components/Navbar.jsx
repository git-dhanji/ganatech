import { Container } from "./Container";
import logo from '../assets/Logo.jpg'
import { useState } from "react";
import Button from "./Button";
import { IconMenu, IconUserCircle, IconX } from '@tabler/icons-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const link = [
        { name: "Solutions", link: "/" },
        { name: "Vision", link: "/about" },
        { name: "Programs", link: "/contact" },
        { name: "Blog", link: "/contact" },

    ]
    return (
        <div className=" w-full top-0 left-0 z-50 bg-bgprimary fixed">
            <Container>
                <nav className="w-full flex justify-between items-center px-4 py-2 md:px-0">
                    {/* Logo */}
                    <div className="flex justify-center items-center gap-x-2 cursor-pointer">
                        <div className="md:w-10 md:h-10 my-4 overflow-hidden rounded-full h-6 w-6">
                            <img src={logo} className="h-full w-full object-cover top-0" />

                        </div>
                        <span className="md:text-xl text-md font-logo font-medium text-white capitalize">
                            Gana Tech Solution
                        </span>
                    </div>

                    {/* Links */}
                    <div className="md:flex justify-center items-center gap-x-6 text-white hidden  text-md font-logo font-extralight">
                        {
                            link.map((item, index) => (
                                <a href={item.link}
                                    className="hover:text-primary transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                        <div className="flex justify-center items-center cursor-pointer gap-x-5">
                            <div className="flex items-center gap-x-1 text-primary transition-colors duration-300 hover:text-text-primary">
                                <div className="w-6 h-6 overflow-hidden rounded-full ">
                                    <IconUserCircle />
                                </div>
                                <span className="text-sm font-semibold capitalize ">
                                    Log in
                                </span>
                            </div>

                            <Button text="Get started" className="hover:bg-primary" />
                        </div>
                    </div>

                    {/* Responsive */}
                    <div className="md:hidden flex items-center justify-center cursor-pointer w-9 h-9 ">
                        {
                            !menuOpen ? (
                                <IconMenu
                                    stroke={1}
                                    className="w-full h-full dark:text-white "
                                    onClick={() => setMenuOpen(!menuOpen)}
                                />) : (
                                <IconX
                                    stroke={1}
                                    className="w-full h-full dark:text-white "
                                    onClick={() => setMenuOpen(!menuOpen)}
                                />)
                        }



                    </div>

                    {
                        menuOpen && (
                            <div className="absolute top-20 bg-bgprimary left-0 w-full h-screen px-5 ">
                                <div className="flex flex-col items-start text-start gap-y-5 text-text-primary text-lg font-logo font-extralight">
                                    {
                                        link.map((item, index) => (
                                            <a href={item.link}
                                                className="hover:text-primary transition-colors duration-300"
                                            >
                                                {item.name}
                                            </a>
                                        ))
                                    }
                                    <div className="flex flex-col items-start cursor-pointer gap-y-5 w-full">
                                        <div className="flex  items-center gap-x-1 text-primary transition-colors duration-300 hover:text-text-primary">
                                            <div className="w-6 h-6 overflow-hidden rounded-full ">
                                                <IconUserCircle />
                                            </div>
                                            <span className="text-sm font-semibold capitalize ">
                                                Log in
                                            </span>
                                        </div>

                                        <Button text="Get started" className="bg-primary w-full flex-1 text-black shadow-xl shadow-neutral-800" />
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </nav>
            </Container >
        </div >
    )
}