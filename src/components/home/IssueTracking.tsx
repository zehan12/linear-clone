import { Momentum } from "./Momentum";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Icons } from "../icons";

export const IssueTracking = () => {
    return (
        <section className="bg-gradient-to-l from-black to-[#08090A] text-white w-full py-20 pt-40 overflow-hidden">
            <div className="pb- flex flex-col justify-center gap-3 group md:max-w-[1000px] md:mx-auto mx-5">
                <div className="flex items-center gap-0">
                    <hr className="h-2 w-3 bg-amber-400 border-none rounded-lg mr-2"></hr>
                    <p>Task tracking and sprint planning</p>
                    <ChevronRight className="text-zinc-700 font-semibold scale-75 group-hover:text-white group-hover:scale-90 group-hover:ml-1 transition-transform duration-300" />
                </div>
                <h2
                    style={{ lineHeight: "1.2" }}
                    className="text-4xl md:text-5xl font-semibold w-fit"
                >
                    Issue tracking <br /> you’ll enjoy using
                </h2>
                <div className="w-full md:w-5/12 my-2">
                    <p>
                        Optimized for speed and efficiency.{" "}
                        <span className="text-zinc-400">
                            Create tasks in seconds, discuss issues in context,
                            and breeze through your work in views tailored to
                            you and your team.
                        </span>
                    </p>
                </div>
                <div className="mb-24 mt-10 overflow-hidden md:overflow-visible">
                    <img
                        className="scale-150 md:scale-150 "
                        src="/assets/home/issue_tracker/issue.png"
                    />
                </div>
                <Momentum />
                <div>
                    <div>
                        <h6 className="text-2xl">Linear Insights</h6>
                        <p className="text-gray-300 my-4">
                            Take the guesswork out of product planning <br />{" "}
                            with realtime, actionable data analytics.
                        </p>
                        <Button className="bg-neutral-800 text-gray-400 flex gap-2">
                            <p className="text-sm">Learn more</p>{" "}
                            <ChevronRight size={"15"} />
                        </Button>
                    </div>
                    <div className="relative overflow-hidden w-full h-96">
                        <div
                            className="absolute inset-0 bg-cover scale-150"
                            style={{
                                backgroundImage:
                                    "url(/assets/home/issue_tracker/bugs.svg)",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent via-black via-25% opacity-50 blur-sm"></div>
                    </div>
                </div>
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
