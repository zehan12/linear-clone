import { Plus } from "lucide-react";

export const ProductTeam = () => {
    return (
        <section className="w-full flex flex-col items-center bg-gradient-to-l from-black to-[#0C0515] py-20 text-white">
            <div className="flex flex-col md:flex-row justify-around md:items-center items-start px-6 md:px-0 gap-5 md:gap-0 w-full md:w-7/12">
                <h3 className="text-4xl md:text-5xl font-semibold leading-10 md:leading-snug">
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
            <div className="flex gap-3 p-10 md:w-8/12 h-full">
                <div className="relative w-2/6 px-5 pb-5 bg-black rounded-3xl group">
                    <img
                        className="w-full max-w-sm mx-auto h-auto rounded-b-3xl"
                        src="/assets/home/product_team/product1.avif"
                        alt="Product 1"
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
                <div className="relative w-2/6 px-5 pb-5 bg-black rounded-3xl group">
                    <img
                        className="w-full max-w-sm mx-auto h-auto rounded-b-3xl"
                        src="/assets/home/product_team/product2.avif"
                        alt="Product 2"
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
                <div className="relative w-2/6 px-5 pb-5 bg-black rounded-3xl group">
                    <img
                        className="w-full max-w-sm mx-auto h-auto rounded-b-3xl"
                        src="/assets/home/product_team/product3.avif"
                        alt="Product 3"
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
            </div>
        </section>
    );
};
