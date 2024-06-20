import { Dispatch, SetStateAction } from "react";

interface CharType {
  id: number;
  name: string;
}

interface CharData {
  id: string;
  name: string;
  image: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: "Male" | "Female";
  description: string;
  affiliation: string;
  originPlanet?: { name: string; description: string; image: string };
  transformations?: { id: string; name: string; image: string }[];
  statusCode?: StatusCode;
}

interface NavbarProps {
  isBtnActive: boolean;
  currentPage: string;
}

interface ButtonsProps {
  charsData: CharDataItems<CharData[]>;
  page: number | string | string[];
}

interface SearchCharacterProps {
  inputName: string | string[];
  setInputName: Dispatch<SetStateAction<string>>;
}

type CharDataItems<T> = {
  items: T;
  meta?: {
    totalPages: number;
  };
  statusCode?: StatusCode;
};

type TypeButton = "decrement" | "increment" | "dbl-decrement" | "dbl-increment";

type StatusCode = 404 | 400;

export type {
  CharType,
  CharData,
  CharDataItems,
  TypeButton,
  NavbarProps,
  ButtonsProps,
  SearchCharacterProps,
};
