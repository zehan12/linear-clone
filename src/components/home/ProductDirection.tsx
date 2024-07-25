import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export const ProductDirection = () => {
    const [ideateOption, setIdeateOption] = useState<number>(1);
    const ideateImages: string[] = ["3.png", "ideate3a.png", "ideate3b.png"];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % ideateImages.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [ideateImages.length]);

    return (
        <section className="bg-gradient-to-l from-black to-[#08090A] text-white w-full">
            <div className="pb- flex flex-col justify-center gap-3 group md:max-w-[1000px] md:mx-auto mx-5">
                <div className="flex items-center gap-0">
                    <hr className="h-2 w-3 bg-lime-400 border-none rounded-lg mr-2"></hr>
                    <p>Project and long-term planning</p>
                    <ChevronRight className="text-zinc-700 font-semibold scale-75 group-hover:text-white group-hover:scale-90 group-hover:ml-1 transition-transform duration-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold w-fit">
                    Set the product direction
                </h2>
                <div className="w-full md:w-5/12">
                    <p>
                        Align your team around a unified product timeline.{" "}
                        <span className="text-zinc-400">
                            Plan, manage, and track all product initiatives with
                            Linear’s visual planning tools.
                        </span>
                    </p>
                </div>
                <div className="overflow-hidden">
                    <img
                        className="scale-150 md:scale-150 "
                        src="/assets/home/product_direction/direction.png"
                    />
                </div>
                <div className="flex flex-col md:flex-row border-y-[1px] border-zinc-900 h-full my-10">
                    <div className="w-full md:w-1/2 border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-zinc-900 h-full">
                        <div className="flex flex-col gap-4 py-10  md:py-16">
                            <h4 className="text-xl md:text-2xl ml-3">
                                Manage projects end-to-end
                            </h4>
                            <p className="text-sm md:text-md text-zinc-400 ml-3">
                                Consolidate specs, milestones, tasks, and other{" "}
                                <br />
                                documentation in one centralized location.
                            </p>
                            <img src="/assets/home/product_direction/overview.png" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:mx-6">
                        <div className="flex flex-col gap-4 py-8 md:py-16">
                            <h4 className="text-xl md:text-2xl ml-3">
                                projects updates
                            </h4>
                            <p className="text-sm md:text-md text-zinc-400 ml-3">
                                Communicate progress and project <br />
                                health with built-in project updates.{" "}
                            </p>
                            <img src="/assets/home/product_direction/overview.png" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full h-full my-10">
                    <div className="w-full md:w-1/2">
                        <h5 className="text-xl md:text-2xl font-semibold leading-7">
                            Ideate and specify <br />
                            what to build next
                        </h5>
                        <div className="w-full flex flex-col gap-4 my-6">
                            <div
                                onClick={() => setIdeateOption(1)}
                                className="text-sm md:text-lg flex items-center font-[500] gap-3 cursor-pointer"
                            >
                                <div
                                    className={cn(
                                        "h-5 w-1 rounded-xl",
                                        ideateOption === 1
                                            ? "bg-lime-500"
                                            : "bg-neutral-800"
                                    )}
                                ></div>
                                <h5 className="">Collaborative documents</h5>
                            </div>
                            <div
                                onClick={() => setIdeateOption(2)}
                                className="text-sm md:text-lg flex items-center font-[500] gap-3 cursor-pointer"
                            >
                                <div
                                    className={cn(
                                        "h-5 w-1 rounded-xl bg-neutral-800",
                                        ideateOption === 2
                                            ? "bg-lime-500"
                                            : "bg-neutral-800"
                                    )}
                                ></div>
                                <h5>Inline comments</h5>
                            </div>
                            <div
                                onClick={() => setIdeateOption(3)}
                                className="text-sm md:text-lg flex items-center font-[500] gap-3 cursor-pointer"
                            >
                                <div
                                    className={cn(
                                        "h-5 w-1 rounded-xl bg-neutral-800",
                                        ideateOption === 3
                                            ? "bg-lime-500"
                                            : "bg-neutral-800"
                                    )}
                                ></div>
                                <h5>Text-to-issue commands</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 overflow-hidden mx-6 md:-mt-10">
                        {ideateOption !== 1 && ideateOption !== 2 && (
                            <div className="relative w-full h-full">
                                {ideateImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`/assets/home/product_direction/${image}`}
                                        alt={`Image ${index + 1}`}
                                        className={`absolute w-full h-full transition-opacity duration-1000 ${
                                            index === currentImageIndex
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                        <img
                            src={`/assets/home/product_direction/ideate${ideateOption}.png`}
                            alt="ideate"
                        />
                    </div>
                </div>
                <div className="w-full py-7 flex flex-wrap justify-evenly md:gap-8 gap-2 border-t-[1px] border-zinc-900">
                    <div className="md:-ml-16 mb-3 md:mb-0">
                        <h6 className="text-sm">Initiatives</h6>
                        <p className="w-40 py-1 text-xs text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-sm">Initiatives</h6>
                        <p className="w-40 py-1 text-xs text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-sm">Initiatives</h6>
                        <p className="w-40 py-1 text-xs text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-sm">Initiatives</h6>
                        <p className="w-40 py-1 text-xs text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
