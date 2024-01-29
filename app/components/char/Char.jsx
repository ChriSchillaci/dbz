import "./index.scss";

export const Char = ({ char }) => {
  return (
    <li className="Char" id={char.id}>
      <img className="Char__img" src={char.image} alt={char.name} />
      <p className="Char__name">{char.name}</p>
    </li>
  );
};
