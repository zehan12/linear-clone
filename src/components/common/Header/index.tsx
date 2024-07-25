import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "../../ui/button";
import Navigation, { NavLinks } from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-10 w-full mt-5">
            <div className="flex items-center gap-4 mx-2 md:mx-auto max-w-[1250px] backdrop-filter backdrop-blur-xl inset-x-0 border-[1px] border-gray-800 rounded-xl px-4 h-12">
                <div className="flex items-center gap-2 text-md font-semibold text-white cursor-pointer">
                    <Icons.linear width={19} height={19} fill="white" /> Linear
                </div>
                <Navigation />
                <div className="ml-auto flex h-full items-center gap-2">
                    <Button className="w-20 h-8 text-xs font-semibold bg-zinc-700 hover:bg-zinc-600">
                        Log in
                        <div className="flex items-center justify-center rounded-sm bg-zinc-600 p-1 h-4 w-4 mx-1">
                            L
                        </div>
                    </Button>
                    <Button
                        className="w-16 h-8 text-xs font-medium"
                        variant={"secondary"}
                    >
                        Sign up
                    </Button>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed md:hidden h-[calc(100vh-5rem)] flex flex-col justify-between border-[1px] border-gray-800 backdrop-filter backdrop-blur-md inset-x-0 text-white p-4 rounded-3xl mt-2 mx-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav>
                            <ul className="h-60 flex flex-col flex-wrap justify-center gap-2 overflow-hidden">
                                {NavLinks.map((item) => (
                                    <li
                                        key={item.label}
                                        className="text-xl font-semibold"
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex justify-evenly items-center gap-6 text-gray-400 font-mono mb-4">
                            <Icons.twitter
                                className="cursor-pointer"
                                width={17}
                                height={17}
                                fill={"white"}
                                color="white"
                            />
                            <Icons.github
                                className="cursor-pointer"
                                width={17}
                                height={17}
                                color="white"
                            />
                            <Icons.slack
                                className="cursor-pointer"
                                width={17}
                                height={17}
                                color="white"
                            />
                            <Icons.youtube
                                className="cursor-pointer"
                                width={17}
                                height={17}
                                fill={"white"}
                                color="white"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
