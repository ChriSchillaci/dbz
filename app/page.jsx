"use client";

import { useEffect, useState } from "react";
import SearchChar from "./components/searchChar/SearchChar";
import CharList from "./components/charList";
import Buttons from "./components/buttons";
import "./page.scss";

export default function Home() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?page=1&limit=9")
      .then((res) => res.json())
      .then((data) => setCharData(data.items));
  }, []);

  return (
    <>
      <header>
        <div className="rectangle"></div>
        <h1>CHARACTERS</h1>
      </header>
      <SearchChar />
      <main>
        <CharList charData={charData} />
        <Buttons />
      </main>
    </>
  );
}
