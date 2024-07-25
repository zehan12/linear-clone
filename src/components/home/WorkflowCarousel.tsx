import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const WorkflowCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const totalSlides = carouselData.length;

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
    };

    return (
        <div className="flex flex-col my-20">
            <div className="hidden md:block relative w-full max-w-screen-lg mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselData.map(({ title, content, src }, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full max-w-[300px] p-2"
                        >
                            <div className="w-full h-full flex flex-col items-center">
                                <img
                                    className="w-full h-60 object-cover rounded-t-3xl"
                                    src={`/assets/home/workflow_integration/${src}.avif`}
                                    alt={title}
                                />
                                <div className="w-full flex justify-between items-center bg-black text-white rounded-b-3xl p-4 pb-6">
                                    <div className="flex flex-col ">
                                        <h1 className="text-xs text-gray-400 mb-2">
                                            {title}
                                        </h1>
                                        <p className="text-md mr-2 h-10">
                                            {content}
                                        </p>
                                    </div>
                                    <div className="mt-4 cursor-pointer">
                                        <Plus
                                            className="p-2 border-[1px] border-zinc-800 rounded-full transition-colors duration-300 hover:bg-zinc-800"
                                            size={30}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center gap-6 my-3">
                <ChevronLeft
                    size={40}
                    onClick={() => currentSlide !== 0 && prevSlide()}
                    className={cn(
                        "rounded-full p-2 cursor-pointer bg-neutral-900 hover:bg-neutral-800",
                        currentSlide === 0 && "cursor-not-allowed "
                    )}
                />
                <ChevronRight
                    size={40}
                    onClick={() => currentSlide !== 1 && nextSlide()}
                    className={cn(
                        "rounded-full p-2 cursor-pointer bg-neutral-900 hover:bg-neutral-800",
                        currentSlide === 1 && "cursor-not-allowed "
                    )}
                />
            </div>
        </div>
    );
};

export const carouselData = [
    {
        title: "Powerful git workflows",
        content: "Automate pull requests and commit workflows",
        src: "git",
    },
    {
        title: "Linear for iOS & Android",
        content: "File and track issues on the go",
        src: "mobile",
    },
    {
        title: "Linear Asks",
        content: "Turn workplace requests into actionable issues",
        src: "ask",
    },
    {
        title: "Customer support",
        content: "Keep a tight feedback loop with your customers",
        src: "support",
    },
    {
        title: "Linear integrations",
        content: "100+ ways to enhance your Linear experience",
        src: "integration",
    },
    {
        title: "Figma integration",
        content: "Bridge the gap between engineering and design",
        src: "figma",
    },
    {
        title: "Build for developers",
        content: "Build your own add-ons with the Linear API",
        src: "api",
    },
];
