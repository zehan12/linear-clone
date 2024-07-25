import { Header, Footer } from "./components/common";
import Hero from "./components/home/Hero";
import { IssueTracking } from "./components/home/IssueTracking";
import { Partnerships } from "./components/home/Partnership";
import { PlanCta } from "./components/home/PlanCta";
import { ProductDirection } from "./components/home/ProductDirection";
import { ProductTeam } from "./components/home/ProductTeam";
import { WorkflowIntegration } from "./components/home/WorkflowIntegration";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Partnerships />
            <ProductTeam />
            <ProductDirection />
            <IssueTracking />
            <WorkflowIntegration />
            <PlanCta />
            <Footer />
        </>
    );
}

export default App;
