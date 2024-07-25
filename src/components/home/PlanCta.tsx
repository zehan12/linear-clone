import { Button } from "../ui/button";

export const PlanCta = () => {
    return (
        <div className="bg-gradient-to-b from-[#0E0E10]  to-neutral-900 text-white h-full">
            <div className="w-full flex flex-col md:flex-row md:justify-around h-80 md:h-48 pt-20 md:pt-0">
                <h1 className="text-4xl md:text-5xl font-semibold text-center">
                    Plan the present.
                    <br />
                    Build the future.
                </h1>
                <div className="flex gap-3 mt-14 mx-auto md:mx-0">
                    <Button
                        className="text-black border-none bg-gray-200 hover:bg-white"
                        variant="outline"
                    >
                        Get started
                    </Button>
                    <Button className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold flex gap-2">
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </div>
    );
};
