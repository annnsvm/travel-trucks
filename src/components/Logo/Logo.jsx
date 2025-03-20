import css from '../Logo/Logo.module.css';

export default function Logo() {
  return (
    <p className={css.text}>
      Travel<span className={css.addtext}>Trucks</span>
    </p>
  );
}