import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="h-full w-full bg-gradient-to-l from-black to-[#08090A] mask-radial-faded pt-24 md:pt-40">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="hidden md:block text-5xl font-semibold text-white leading-snug animate-blur-in">
                    Linear is a purpose-built tool for
                    <br /> planning and building products
                </h1>
                <h1 className="block md:hidden text-5xl font-semibold text-center animate-blur-in text-white leading-tight">
                    Plan and
                    <br />
                    build your <br />
                    product
                </h1>
                <div className="hidden md:block my-6 text-2xl font-medium text-neutral-400 animate-blur-in">
                    <p>Meet the system for modern software development.</p>
                    <p>Streamline issues, projects, and product roadmaps.</p>
                </div>
                <div className="block md:hidden text-center my-6 text-2xl text-gray-300">
                    <p>Linear is a purpose-build tool for</p>
                    <p>modern product development </p>
                    <p>Streamline issues, projects,</p>
                    <p>and product roadmaps.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center my-10 gap-4 animate-blur-in">
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
            <div className="w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="/assets/home/hero/platform.png"
                    alt="Platform"
                />
            </div>
        </section>
    );
};

export default Hero;
