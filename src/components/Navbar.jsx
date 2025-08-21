import { Container } from "./Container";
import logo from "../assets/Logo.jpg";
import { useState } from "react";
import Button from "./Button";
import { IconMenu, IconUserCircle, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const link = [
        { name: "Solutions", link: "/" },
        { name: "Vision", link: "/about" },
        { name: "Programs", link: "/contact" },
        { name: "Blog", link: "/blog" },
    ];

    // Animation variants
    const menuVariants = {
        hidden: { x: "100%", opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.15 },
        },
        exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    };

    const linkVariants = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <div className="w-full top-0 left-0 z-50 bg-bgprimary fixed shadow-md">
            <Container>
                <nav className="w-full flex justify-between items-center px-4 py-3 md:px-0">
                    {/* Logo */}
                    <motion.div

                        className="flex justify-center items-center gap-x-2 cursor-pointer"
                    >
                        <div className="md:w-10 md:h-10 my-2 overflow-hidden rounded-full h-8 w-8">
                            <img src={logo} className="h-full w-full object-cover" />
                        </div>
                        <span className="md:text-xl text-md font-logo font-medium text-white capitalize">
                            Gana Tech Solution
                        </span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="md:flex hidden justify-center items-center gap-x-6 text-white text-md font-logo font-extralight">
                        {link.map((item, i) => (
                            <motion.a

                                className="hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <Button text="Get started" className="hover:bg-primary" />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center justify-center cursor-pointer w-9 h-9">
                        {menuOpen ? (
                            <IconX
                                stroke={1.5}
                                className="w-full h-full text-white"
                                onClick={() => setMenuOpen(false)}
                            />
                        ) : (
                            <IconMenu
                                stroke={1.5}
                                className="w-full h-full text-white"
                                onClick={() => setMenuOpen(true)}
                            />
                        )}
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={menuVariants}
                            className="absolute top-16 left-0 w-full h-screen bg-bgprimary px-6 py-10 md:hidden"
                        >
                            <div className="flex flex-col gap-y-6 text-text-primary text-lg font-logo font-extralight">
                                {link.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.link}
                                        variants={linkVariants}
                                        onClick={() => setMenuOpen(false)}
                                        className="hover:text-primary transition-colors duration-300"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}

                                {/* Extra options */}
                                <motion.div
                                    variants={linkVariants}
                                    className="flex flex-col gap-y-6 w-full"
                                >
                                    <div className="flex items-center gap-x-2 text-primary hover:text-text-primary cursor-pointer">
                                        <IconUserCircle />
                                        <span className="text-sm font-semibold capitalize">Log in</span>
                                    </div>
                                    <Button
                                        text="Get started"
                                        className="bg-primary w-full text-black shadow-xl shadow-neutral-800"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </div>
    );
}
