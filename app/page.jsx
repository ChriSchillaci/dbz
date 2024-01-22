import Navbar from "./components/navBar";
import SearchChar from "./components/searchChar";
import CardList from "./components/cardList";
import "./page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <header>
        <div className="rectangle"></div>
        <h1>CHARACTERS</h1>
      </header>
      <SearchChar />
      <main>
        <CardList />
      </main>
    </>
  );
}
