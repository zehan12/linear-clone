import { Header, Footer } from "./components/common";
import Hero from "./components/home/Hero";
import { Partnerships } from "./components/home/Partnership";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Partnerships />
            <Footer />
        </>
    );
}

export default App;
