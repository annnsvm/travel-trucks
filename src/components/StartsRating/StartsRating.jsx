import css from "../StartsRating/StartsRating.module.css";

export default function StarsRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`${css.star} ${index < rating ? css.filled : ""}`}
    >
      ★
    </span>
  ));

  return <div className={css.stars}>{stars}</div>;
}
