const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onSquareClicked(props.value)}>
      {props.hi}
    </button>
  );
};

export default Square;