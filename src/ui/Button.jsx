import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'foucs:ring-offset-2 text-sm  inline-block rounded-full bg-yellow-400    font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 active:bg-slate-400 disabled:cursor-not-allowed';
  const style = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-4  md:px-5 md:py-2.5 text-xs',
    secondary:
      'focus:ring-offset-2 text-sm  inline-block border-2 border-stone-300  rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800  focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 active:bg-slate-400 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 focus:text-stone-800',
  };
  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}{' '}
      </Link>
    );
  }
  return (
    <button to={to} disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
