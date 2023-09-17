const Button = ({ cta, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="w-fit py-4 px-6 bg-zinc-900 text-zinc-200 font-semibold rounded-lg transition-all hover:scale-95 focus:bg-zinc-950 shadow-md hover:shadow-sm"
    >
      {cta}
    </button>
  );
};

export default Button;
