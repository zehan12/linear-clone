import { Plus } from "lucide-react";
import { useState } from "react";

export const ProductTeam = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };

    return (
        <section className="w-full flex flex-col items-center gap-10 md:gap-0 bg-gradient-to-l from-black to-[#0C0515] py-20 text-white">
            <div className="flex flex-col md:flex-row justify-start md:items-center items-start px-6 md:px-0 gap-5 md:gap-20 w-full md:w-8/12">
                <h3 className="text-4xl md:text-5xl font-semibold leading-10 md:leading-snug md:ml-10 ">
                    Made for modern
                    <br /> product teams
                </h3>
                <div className="text-zinc-400 leading-6 text-lg font-[500] w-80">
                    <p>
                        Linear is shaped by the practices and principles that
                        distinguish world-class product teams from the rest:
                        relentless focus, fast execution, and a commitment to
                        the quality of craft.
                    </p>
                </div>
            </div>
            <div className="hidden md:flex gap-3 p-10 md:w-8/12 h-full">
                {[
                    "/assets/home/product_team/product1.avif",
                    "/assets/home/product_team/product2.avif",
                    "/assets/home/product_team/product3.avif",
                ].map((src, index) => (
                    <div
                        key={index}
                        className="relative w-2/6 px-5 pb-5 bg-black rounded-3xl group"
                    >
                        <img
                            className="w-full max-w-sm mx-auto h-auto rounded-b-3xl md:opacity-50"
                            src={src}
                            alt={`Product ${index + 1}`}
                        />
                        <div className="absolute w-full h-full top-0 left-0 bg-zinc-800/60 opacity-0 transition-opacity duration-300 group-hover:opacity-40 rounded-3xl"></div>
                        <div className="flex items-center justify-between my-4">
                            <h4 className="text-xl">
                                Purpose-built for <br /> product development{" "}
                            </h4>
                            <div className="cursor-pointer">
                                <Plus
                                    className="p-2 border-[1px] border-zinc-800 rounded-full transition-colors duration-300 group-hover:bg-zinc-800"
                                    size={40}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden w-full relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {[
                        "/assets/home/product_team/product1.avif",
                        "/assets/home/product_team/product2.avif",
                        "/assets/home/product_team/product3.avif",
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 px-5 pb-5 bg-black rounded-3xl group"
                        >
                            <img
                                className="w-full max-w-sm mx-auto h-auto rounded-b-3xl"
                                src={src}
                                alt={`Product ${index + 1}`}
                            />
                            <div className="absolute w-full h-full top-0 left-0 bg-zinc-800/60 opacity-0 transition-opacity duration-300 group-hover:opacity-40 rounded-3xl"></div>
                            <div className="flex items-center justify-between my-4">
                                <h4 className="text-xl">
                                    Purpose-built for <br /> product development{" "}
                                </h4>
                                <div className="cursor-pointer">
                                    <Plus
                                        className="p-2 border-[1px] border-zinc-800 rounded-full transition-colors duration-300 group-hover:bg-zinc-800"
                                        size={40}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white"
                >
                    {"<"}
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white"
                >
                    {">"}
                </button>
            </div>
        </section>
    );
};
