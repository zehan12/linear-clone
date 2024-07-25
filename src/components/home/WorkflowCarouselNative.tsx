import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { carouselData } from "./WorkflowCarousel";

export const WorkflowCarouselNative = () => {
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
        <div className="flex flex-col my-20 md:hidden overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselData.map(({ title, content, src }, index) => (
                        <div key={index} className="flex-shrink-0 w-full p-2">
                            <div className="w-full h-full flex flex-col items-center">
                                <img
                                    className=" w-72 h-full object-cover rounded-t-lg"
                                    src={`/assets/home/workflow_integration/${src}.avif`}
                                    alt={title}
                                />
                                <div className="w-72 flex justify-between items-center bg-black text-white rounded-b-3xl p-4 pb-6">
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
                <div className="flex justify-center gap-5">
                    <ChevronLeft
                        size={30}
                        onClick={prevSlide}
                        className={cn(
                            "rounded-full p-2 cursor-pointer bg-neutral-900 hover:bg-neutral-800",
                            currentSlide === 0 && "cursor-not-allowed"
                        )}
                    />
                    <ChevronRight
                        size={30}
                        onClick={nextSlide}
                        className={cn(
                            "rounded-full p-2 cursor-pointer bg-neutral-900 hover:bg-neutral-800",
                            currentSlide === totalSlides - 1 &&
                                "cursor-not-allowed"
                        )}
                    />
                </div>
            </div>
        </div>
    );
};
