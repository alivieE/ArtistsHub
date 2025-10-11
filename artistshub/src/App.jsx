import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ArtistList from "./components/ArtistList/ArtistList";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header></Header>
      <Hero className="hero"></Hero>
      <section id="artists">
        <ArtistList />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="reviews">
        <FeedBacks />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
