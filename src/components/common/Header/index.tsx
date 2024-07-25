import { Icons } from "@/components/icons";
import { Button } from "../../ui/button";
import Navigation from "./Navigation";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-10 w-full mt-5">
            <div className="flex items-center gap-4 mx-2 md:mx-auto max-w-[1250px] backdrop-filter backdrop-blur-xl  inset-x-0 border-[1px] border-gray-800 rounded-xl px-4 h-12">
                <div className="flex items-center gap-2 text-md font-semibold text-white cursor-pointer">
                    <Icons.linear width={19} height={19} fill="white" /> Linear
                </div>
                <Navigation />
                <div className="ml-auto flex h-full items-center gap-2">
                    <Button className="w-20 h-8 text-xs font-semibold bg-zinc-700 hover:bg-zinc-600">
                        Log in
                        <div className="flex items-center justify-center rounded-sm bg-zinc-600 p-1 h-4 w-4 mx-1">
                            L
                        </div>
                    </Button>
                    <Button
                        className="w-16  h-8 text-xs font-medium"
                        variant={"secondary"}
                    >
                        Sign up
                    </Button>
                </div>
                <button className="ml-6 md:hidden"></button>
            </div>
        </header>
    );
};