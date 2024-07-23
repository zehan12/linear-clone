import { Icons } from "../../icons";

export const Footer = () => {
    return (
        <>
            <footer className="mt-12 border-t border-gray-100 py-10 text-md bg-[#08090A]">
                <div className="mx-auto max-w-[120rem] px-[2.4rem] flex flex-col justify-center lg:flex-row gap-20">
                    <div>
                        <div className="flex h-full flex-row justify-between lg:flex-col">
                            <div className="flex items-center text-sm font-medium text-zinc-400 hover:text-white  cursor-pointer">
                                <img
                                    src="/linear.svg"
                                    className="mr-4 h-4 w-4"
                                />{" "}
                                Linear - Designed Worldwide
                            </div>
                            <div className="mt-auto flex items-center gap-6 text-gray-400">
                                <Icons.twitter
                                    className="cursor-pointer"
                                    width={17}
                                    height={17}
                                    fill={"#9CA3AF"}
                                />
                                <Icons.github
                                    className="cursor-pointer"
                                    width={17}
                                    height={17}
                                />
                                <Icons.slack
                                    className="cursor-pointer"
                                    width={17}
                                    height={17}
                                />
                                <Icons.youtube
                                    className="cursor-pointer"
                                    width={17}
                                    height={17}
                                    fill={"#9CA3AF"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {Links.map((items) => (
                            <div
                                key={items.title}
                                className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-40"
                            >
                                <h3 className="mb-3 text-sm font-medium text-white cursor-default">
                                    {items.title}
                                </h3>
                                <ul>
                                    {items.links.map((link) => (
                                        <li
                                            key={link.label}
                                            className="[&_a]:last:mb-0 cursor-pointer"
                                        >
                                            <div className="mb-3 block text-sm text-zinc-100/50 transition-colors hover:text-gray-200">
                                                {link.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};

const Links = [
    {
        title: "Product",
        links: [
            { href: "/features", label: "Features" },
            { href: "/integrations", label: "Integrations" },
            { href: "/pricing", label: "Pricing" },
            { href: "/changelog", label: "Changelog" },
            { href: "/docs", label: "Docs" },
            { href: "/method", label: "Linear Method" },
            { href: "/download", label: "Download" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/about", label: "About us" },
            { href: "/blog", label: "Blog" },
            { href: "/careers", label: "Careers" },
            { href: "/customers", label: "Customers" },
            { href: "/brand", label: "Brand" },
        ],
    },
    {
        title: "Resources",
        links: [
            { href: "/startup-program", label: "Startup Program" },
            { href: "/community", label: "Community" },
            { href: "/contact", label: "Contact" },
            { href: "/dpa", label: "DPA" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of service" },
            { href: "/report", label: "Report a vulnerability" },
        ],
    },
    {
        title: "Developers",
        links: [
            { href: "/api", label: "API" },
            { href: "/status", label: "Status" },
            { href: "/github", label: "GitHub" },
            { href: "/readme", label: "README" },
        ],
    },
];