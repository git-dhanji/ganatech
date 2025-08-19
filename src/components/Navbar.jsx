import { Container } from "./Container";
import logo from '../assets/Logo.jpg'
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const link = [
        { name: "Solutions", link: "/" },
        { name: "Vision", link: "/about" },
        { name: "Programs", link: "/contact" },
        { name: "Blog", link: "/contact" },

    ]
    return (
        <div className=" w-full top-0 left-0 z-50 bg-bgprimary">
            <Container>
                <nav className="w-full flex justify-between items-center ">
                    {/* Logo */}
                    <div className="flex justify-center items-center gap-x-4">
                        <div className="w-14 h-14 my-4 overflow-hidden rounded-full ">
                            <img src={logo} className="h-full w-full object-cover top-0" />
                        </div>
                        <span className="text-xl font-semibold text-white capitalize">
                            Gana Tech Solution
                        </span>
                    </div>

                    {/* Links */}
                    <div className="md:flex justify-center items-center gap-x-6 text-white hidden  text-sm">
                        {
                            link.map((item, index) => (
                                <a href={item.link}
                                    className="hover:text-primary transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                        <div className="flex justify-center items-center gap-x-4 cursor-pointer ">
                            <div className="w-6 h-6  overflow-hidden rounded-full ">
                                <img src={logo} className="h-full w-full object-cover top-0" />
                            </div>
                            <span className="text-sm font-semibold text-white capitalize hover:text-primary">
                                Log in
                            </span>
                            <Button text="Get started" className="hover:bg-primary" />
                        </div>
                    </div>

                    {/* Responsive */}
                    <div className="md:hidden flex items-center justify-center cursor-pointer">
                        <button
                            onClick={() => { setMenuOpen(!menuOpen) }}
                            className="w-full h-2 bg-white text-white">Menu</button>
                    </div>

                    {
                        menuOpen && (
                            <div className="md:hidden absolute inset-x-0 top-16  shadow-aceternity rounded-md max-w-full mx-auto bg-bgprimary">
                                <div className="flex flex-col items-start justify-center text-md tracking-wide gap-4 pl-4 text-white py-8 capitalize">
                                    {
                                        link.map((value, index) => (
                                            <a
                                                href={value.href}
                                                key={value.href + index}
                                                className=" hover:bg-primary transition-colors ease-in "
                                            >{value.name}</a>
                                        ))
                                    }
                                </div>
                            </div>

                        )
                    }


                </nav>
            </Container >
        </div>
    )
}