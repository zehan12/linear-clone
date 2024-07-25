import "@/index.css";

export const Momentum = () => {
    return (
        <div className="flex flex-col md:flex-row border-y-[1px] border-zinc-900 h-full my-10">
            <div className="w-full md:w-1/2 border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-zinc-900 h-full">
                <div className="flex flex-col gap-4 py-10  md:py-16">
                    <h4 className="text-xl md:text-2xl ml-3">
                        Build momentum with Cycles
                    </h4>
                    <p className="text-sm md:text-md text-zinc-400 ml-3">
                        Create healthy routines and focus your
                        <br />
                        team on what work should happen next.
                    </p>
                    <img
                        className="rounded-l-3xl"
                        src="/assets/home/issue_tracker/chart.png"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 md:mx-6">
                <div className="flex flex-col gap-4 py-8 md:py-16">
                    <h4 className="text-xl md:text-2xl ml-3">
                        Manage incoming work with Triage
                    </h4>
                    <p className="text-sm md:text-md text-zinc-400 ml-3">
                        Review and assign incoming bug reports,
                        <br />
                        feature requests, and other unplanned work.
                    </p>
                    <img
                        className="rounded-3xl"
                        src="/assets/home/issue_tracker/triage.png"
                    />
                </div>
            </div>
        </div>
    );
};
