import { useSelector } from "react-redux";
import css from "../Reviewes/Reviewes.module.css";
import { selectTruck } from "../../redux/trucks/selectors";
import { nanoid } from "@reduxjs/toolkit";
import StarsRating from "../StartsRating/StartsRating";

export default function Reviews() {
  const truck = useSelector(selectTruck);

  return (
    truck && (
      <ul className={css.list}>
        {truck.reviews.map((item) => {
          return (
            <li key={nanoid()}>
              <div className={css.container}>
                <div className={css.nameContainer}>
                  <div className={css.avatar}>
                    {item.reviewer_name.slice(0, 1)}
                  </div>
                  <div>
                    <div className={css.name}>{item.reviewer_name}</div>
                    <StarsRating rating={item.reviewer_rating} />
                  </div>
                </div>
                <p className={css.text}>{item.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}
