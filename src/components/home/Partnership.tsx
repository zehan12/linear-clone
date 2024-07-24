import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PartnerIcons } from "../icons/partners";

export const Partnerships = () => {
    const [isHover, setHover] = useState<boolean>(false);
    const [currentPart, setCurrentPart] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentPart((prev) => (prev + 1) % parts.length);
                setIsTransitioning(false);
            }, 600);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="p-6 py-20 text-white bg-gradient-to-l from-black to-[#0C0515]">
            <div className="hidden md:block p-4 mx-auto text-center mb-3 text-2xl">
                <p>Powering the world’s best product teams.</p>
                <p className="text-zinc-400">
                    From next-gen startups to established enterprises.
                </p>
            </div>
            <div className="block md:hidden text-center mb-3 text-2xl text-zinc-400">
                <p>Powering the world’s best product</p>
                <p>teams. From next-gen startups</p>
                <p>to established enterprises.</p>
            </div>
            <div className="relative">
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="mx-auto md:mx-40"
                >
                    <div
                        className={cn(
                            "transition-blur duration-500 grid justify-center grid-cols-2 text-center lg:grid-cols-3",
                            isHover && "blur-sm"
                        )}
                    >
                        {parts[currentPart].map((SvgComponent, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex flex-col justify-start items-center mx-2 lg:mx-6 md:-my-10 transform transition-transform duration-500",
                                    isTransitioning ? "scale-0" : "scale-100"
                                )}
                            >
                                <SvgComponent
                                    width={200}
                                    height={200}
                                    fill={"white"}
                                />
                            </div>
                        ))}
                    </div>

                    {isHover && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer">
                            <div className="flex items-baseline gap-2 bg-zinc-800 px-4 py-1 border-[1px] border-neutral-700 rounded-2xl">
                                <p className="text-sm text-white">
                                    Meet our customers
                                </p>{" "}
                                <span className="text-gray-400">{">"}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const partnerOne = [
    PartnerIcons.Icon1,
    PartnerIcons.Icon2,
    PartnerIcons.Icon3,
    PartnerIcons.Icon4,
    PartnerIcons.Icon5,
    PartnerIcons.Icon6,
];

const partnerTwo = [
    PartnerIcons.Icon7,
    PartnerIcons.Icon8,
    PartnerIcons.Icon9,
    PartnerIcons.Icon10,
    PartnerIcons.Icon11,
    PartnerIcons.Icon12,
];

const partnerThree = [
    PartnerIcons.Icon13,
    PartnerIcons.Icon14,
    PartnerIcons.Icon15,
    PartnerIcons.Icon16,
    PartnerIcons.Icon17,
    PartnerIcons.Icon18,
];

const parts = [partnerOne, partnerTwo, partnerThree];
