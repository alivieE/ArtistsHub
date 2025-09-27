import "./App.css";
import ArtistList from "./components/ArtistList/ArtistList";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header></Header>
      <Hero className="hero"></Hero>
      <ArtistList />
      <FeedBacks/>
    </>
  );
}

export default App;
