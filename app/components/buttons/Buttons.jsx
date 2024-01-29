import "./index.scss";

const Buttons = () => {
  return (
    <div className="Buttons">
      <div className="Buttons__btns-prev">
        <button className="Buttons__btns-prev__btn">{"<<"}</button>
        <button className="Buttons__btns-prev__btn">{"<"}</button>
      </div>
      <p>
        Page <span>1</span> of <span>5</span>
      </p>
      <div className="Buttons__btns-next">
        <button className="Buttons__btns-next__btn">{">"}</button>
        <button className="Buttons__btns-next__btn">{">>"}</button>
      </div>
    </div>
  );
};

export default Buttons;
