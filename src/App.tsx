import { Header, Footer } from "./components/common";
import Hero from "./components/home/Hero";
import { Partnerships } from "./components/home/Partnership";
import { ProductDirection } from "./components/home/ProductDirection";
import { ProductTeam } from "./components/home/ProductTeam";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Partnerships />
            <ProductTeam />
            <ProductDirection />
            <Footer />
        </>
    );
}

export default App;
