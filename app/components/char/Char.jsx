import React from "react";

export const Char = ({ char }) => {
  return <li id={char.id}>{char.name}</li>;
};
