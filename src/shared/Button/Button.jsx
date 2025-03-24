import css from '../Button/Button.module.css';

export default function Button({ text }) {
  return (
    <button className={css.btn} type="submit">
      {text}
    </button>
  );
}