import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="h-screen w-full bg-gradient-to-l from-black to-[#0C0515] mask-radial-faded pt-20 md:pt-40">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="hidden md:block text-5xl font-semibold text-white leading-snug animate-blur-in">
                    Linear is a purpose-built tool for
                    <br /> planning and building products
                </h1>
                <h1 className="block md:hidden text-5xl font-semibold text-center animate-blur-in">
                    Plan and build <br />
                    your product
                </h1>
                <div className="my-6 text-2xl font-medium text-neutral-400 animate-blur-in">
                    <p>Meet the system for modern software development.</p>
                    <p>Streamline issues, projects, and product roadmaps.</p>
                </div>
                <div className="flex items-center my-10 gap-4 animate-blur-in">
                    <Button
                        className="bg-gray-200 hover:bg-white font-[550]"
                        variant={"secondary"}
                    >
                        Start building
                    </Button>
                    <Button
                        className="h-9 hover:bg-neutral-800"
                        variant={"ghost"}
                    >
                        <p className="bg-gradient-to-r from-white via-gray-300 to-gray-500 inline-block text-transparent bg-clip-text text-md hover:text-gray-200">
                            Introducing Initiative {">"}
                        </p>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
