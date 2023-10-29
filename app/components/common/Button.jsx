const Button = ({ cta, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="w-fit py-3 px-6 bg-slate-950 text-slate-200 font-semibold rounded transition-all hover:scale-95 focus:bg-slate-900 shadow-md hover:shadow-sm"
    >
      {cta}
    </button>
  );
};

export default Button;
