import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Reviews from "./components/reviews/reviews";

function App() {
  return (
    <>
      <Header
        title="Nagy Ábel"
        message="Software developer"
      />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer year="© Copyright 2026" />
    </>
  );
}

export default App;