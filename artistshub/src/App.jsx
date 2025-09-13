import "./App.css";
import ArtistList from "./components/ArtistList/ArtistList";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header></Header>
      <Hero className="hero"></Hero>
      <ArtistList />
    </>
  );
}

export default App;
