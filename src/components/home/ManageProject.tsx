import CardSequence from "./CardSequence";
import "@/index.css";

export const ManageProject = () => {
    return (
        <div className="flex flex-col md:flex-row border-y-[1px] border-zinc-900 h-full my-10">
            <div className="w-full md:w-1/2 border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-zinc-900 h-full">
                <div className="flex flex-col gap-4 py-10  md:py-16">
                    <h4 className="text-xl md:text-2xl ml-3">
                        Manage projects end-to-end
                    </h4>
                    <p className="text-sm md:text-md text-zinc-400 ml-3">
                        Consolidate specs, milestones, tasks, and other <br />
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
                    <CardSequence />

                    <img className="md:hidden" src="/assets/home/product_direction/card.png" />
                </div>
            </div>
        </div>
    );
};
