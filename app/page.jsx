import Navbar from "./components/navbar";
import SearchChar from "./components/searchchar";
import "./page.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <header>
        <div className="rectangle"></div>
        <h1>CHARACTERS</h1>
      </header>
      <SearchChar />
      <main></main>
    </>
  );
}
