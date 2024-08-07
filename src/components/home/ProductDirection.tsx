import { ChevronRight } from "lucide-react";
import { Ideate } from "./Ideate";
import { ManageProject } from "./ManageProject";
import { Icons } from "../icons";

export const ProductDirection = () => {
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
                <ManageProject />
                <Ideate />
                <div className="w-full py-7 flex flex-wrap justify-evenly md:gap-8 gap-2 border-t-[1px] border-zinc-900 md:mb-40">
                    <div className="md:-ml-16 mb-3 md:mb-0">
                        <div className="flex items-center gap-2">
                            <Icons.initiatives
                                height={17}
                                width={17}
                                fill="white"
                            />
                            <h6 className="text-sm md:text-md">Initiatives</h6>
                        </div>
                        <p className="w-40 py-1 text-sm text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Icons.crossTeam
                                height={17}
                                width={17}
                                fill="white"
                            />
                            <h6 className="text-sm md:text-md">
                                Cross-team projects
                            </h6>
                        </div>
                        <p className="w-40 py-1 text-sm text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Icons.milestone
                                height={17}
                                width={17}
                                fill="white"
                            />

                            <h6 className="text-sm md:text-md">Milestones</h6>
                        </div>
                        <p className="w-40 py-1 text-sm text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Icons.progress
                                height={17}
                                width={17}
                                fill="white"
                            />
                            <h6 className="text-sm md:text-md">
                                Progress insights
                            </h6>
                        </div>

                        <p className="w-40 py-1 text-sm text-zinc-500">
                            Coordinate strategic product efforts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
