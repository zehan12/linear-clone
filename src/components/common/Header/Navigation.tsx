import { cn } from "@/lib/utils";

const Navigation = ({ isOpen = false }) => {
    return (
        <>
            <nav className="w-full">
                <div
                    className={cn(
                        "transition-[visibility] md:visible",
                        isOpen ? "visible" : "invisible delay-500"
                    )}
                >
                    <nav
                        className={cn(
                            "fixed w-full overflow-auto bg-black transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:transition-none",
                            isOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-[-100vw] opacity-0"
                        )}
                    >
                        <ul className="flex justify-center gap-20 h-full flex-col ease-in md:flex-row md:items-center text-gray-300">
                            {NavLinks.map((item) => {
                                const shouldHideOnMobile = item.isMobile;
                                const shouldHideOnWeb = item.isWeb === undefined;
                                return (
                                    <li
                                        key={item.label}
                                        className={cn(
                                            "border-b border-gray-500 md:border-none cursor-pointer",
                                            shouldHideOnMobile && "md:hidden",
                                            shouldHideOnWeb && "md:block"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "flex w-full translate-y-8 items-center text-sm transition-[color,transform] duration-300 hover:text-white md:translate-y-0 md:text-md md:transition-colors",
                                                isOpen && "translate-y-0"
                                            )}
                                        >
                                            {item.label}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    );
};

export const NavLinks = [
    { href: "/features", label: "Features" },
    { href: "/method", label: "Method" },
    { href: "/customers", label: "Customers", isMobile: true },
    { href: "/changelog", label: "Changelog", isMobile: true },
    {
        href: "/integrations",
        label: "Integrations",
        isMobile: true,
        isWeb: false,
    },
    { href: "/docs", label: "Docs", isMobile: true, isWeb: false },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About", isMobile: true, isWeb: false },
    { href: "/blog", label: "Blog", isMobile: true, isWeb: false },
    { href: "/careers", label: "Careers", isMobile: true, isWeb: false },
    {
        href: "/company",
        label: "Company",
        isMobile: true,
        className: "hidden md:block",
    },
    {
        href: "/contact",
        label: "Contact",
        isMobile: true,
        className: "hidden md:block",
    },
];

export default Navigation;
