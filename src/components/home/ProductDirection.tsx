import { ChevronRight } from "lucide-react";

export const ProductDirection = () => {
    return (
        <section className="bg-gradient-to-l from-black to-[#0C0515] text-white w-full">
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
                        className="scale-150 md:scale-100 "
                        src="/assets/home/product_direction/direction.png"
                    />
                </div>
            </div>
        </section>
    );
};
