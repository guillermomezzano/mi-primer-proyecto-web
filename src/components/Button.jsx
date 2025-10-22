const Button = ({ nameButton, setCount, count }) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{nameButton}</button>
    </>
  );
};

export default Button;
