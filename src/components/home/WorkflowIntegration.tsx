export const WorkflowIntegration = () => {
    return (
        <section className="bg-[#0E0E10] text-white w-full h-full pb-10">
            <div className="flex flex-col justify-center gap-3 group md:max-w-[1000px] md:mx-auto mx-5 pt-40">
                <div className="flex items-center">
                    <hr className="h-2 w-3 bg-purple-400 border-none rounded-lg mr-2"></hr>
                    <p>Workflows and integrations</p>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <h2 className="w-full md:w-7/12 text-4xl md:text-5xl font-semibold">
                        Collaborate across <br /> tools and teams
                    </h2>
                    <div className="w-full md:w-5/12 pt-8">
                        <p className="text-lg text-zinc-400">
                            Expand the capabilities of the Linear system with a
                            wide variety of integrations that keep everyone in
                            your organization aligned and focused.
                        </p>
                    </div>
                </div>
                {/* car */}
                <div></div>
            </div>
            <div className="md:flex">
                <div className="md:w-2/6 md:ml-48">
                    <div className="mx-4 flex flex-col gap-3 md:mt-10">
                        <div className="flex items-center">
                            <hr className="h-2 w-3 border-[1px] border-gray-500 rounded-lg mr-2"></hr>
                            <p>Under the hood</p>
                        </div>
                        <h4 className="text-4xl">
                            Built on strong foundations
                        </h4>
                        <p className="text-md text-zinc-400">
                            Linear is so simple to use, it’s easy to overlook
                            the wealth of complex technologies packed under the
                            hood that keep Linear robust, safe, and blazing
                            fast.
                        </p>
                        <div className="flex flex-col gap-6 my-4 border-y-[1px] border-zinc-800 py-4">
                            <div className="flex flex-col md:flex-row md:justify-between gap-2">
                                <h6>Linear Sync Engine</h6>
                                <p className="text-zinc-400 w-60">
                                    Built with a high-performance architecture
                                    and an obsessive focus on speed.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between gap-2">
                                <h6>Enterprise-ready security</h6>
                                <p className="text-zinc-400 w-60">
                                    Best-in-class security practices keep your
                                    work safe and secure at every layer.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between gap-2">
                                <h6>Engineered for scale</h6>
                                <p className="text-zinc-400 w-60">
                                    Built for teams of all sizes. From
                                    early-stage startups to global enterprises.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap items-center justify-evenly gap-16 md:gap-2 text-sm">
                            <div className="w-20">
                                <p>SSO, SAML, SCIM</p>
                            </div>
                            <div className="w-20">
                                <p>SOC 2 Compliant</p>
                            </div>
                            <div className="w-20">
                                <p>Multi-region support</p>
                            </div>
                            <div className="w-20">
                                <p>Advanced admin controls</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col ml-20 w-6/12 bg-red-500 h-full">
                    <img src="/assets/home/workflow_integration/box1.png" />
                    <img src="/assets/home/workflow_integration/box2.png" />
                </div>
            </div>
        </section>
    );
};
