const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 bg-gray-200 p-3 rounded-lg shadow-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
