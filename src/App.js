import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route>
          <Hero />
        </Route>
        <Route>
          <About />
        </Route>
        <Route>
          <Services />
        </Route>
        <Route>
          <Portfolio />
        </Route>
        <Route>
          <Contact />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
