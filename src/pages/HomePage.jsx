import css from "../pages/HomePage.module.css";
import LinkButton from "../shared/LinkButton/LinkButton";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <LinkButton route="/catalog" text="View Now" width={173} />
    </div>
  );
}
