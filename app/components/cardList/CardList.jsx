"use client";

import { useEffect, useState } from "react";
import Char from "../char";
import "./index.scss";

export const CardList = () => {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?page=1&limit=58")
      .then((res) => res.json())
      .then((data) => setCharData(data.items));
  }, []);

  return (
    <ul className="CardList">
      {charData.map((char) => (
        <Char char={char} key={char.id} />
      ))}
    </ul>
  );
};
