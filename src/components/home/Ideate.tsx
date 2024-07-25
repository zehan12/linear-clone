import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Ideate = () => {
    const [ideateOption, setIdeateOption] = useState<number>(1);
    const ideateImages: string[] = ["ideate3.png", "ideate3a.png", "ideate3b.png"];

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
            <div className="w-full md:w-1/2 overflow-hidden overflow-x-hidden mx-6 md:-mt-10">
                {ideateOption !== 1 && ideateOption !== 2 && (
                    <div className="hidden md:block relative w-full h-full">
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
    );
};
