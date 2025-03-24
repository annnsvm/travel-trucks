import LinkButton from "../../shared/LinkButton/LinkButton";
import Icon from "../../shared/Icon/Icon";
import OptionsItem from "../../shared/OptionsItem/OptionsItem";
import css from "../TruckCard/TruckCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/trucks/slice";
import clsx from "clsx";
import { useState } from "react";
import { selectFavoritesTrucks } from "../../redux/trucks/selectors";

export default function TruckCard({
  name,
  price,
  description,
  gallery,
  location,
  rating,
  reviews,
  transmission,
  engine,
  kitchen,
  AC,
  water,
  TV,
  bathroom,
  gas,
  id,
}) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesTrucks);
  const isFavorite = favorites.some((card) => card.id === id);

  const makeButtonClass = () => {
    return clsx(css.heartBtn, isActive && css.active, isFavorite && css.active);
  };

  const toggleFavorites = () => {
    dispatch(addToFavorites(id));
    setIsActive((prev) => !prev);
  };
  return (
    <div className={css.container}>
      <img className={css.img} src={gallery} alt="TruckPhoto" />
      <div className={css.infoField}>
        <div className={css.textInfo}>
          <div className={css.titleContainer}>
            <div className={css.titleWrapper}>
              <h3 className={css.title}>{name}</h3>
              <div className={css.priceContainer}>
                <p className={css.price}>€{price}.00</p>
                <button
                  className={makeButtonClass()}
                  type="button"
                  onClick={toggleFavorites}
                >
                  <Icon
                    className={css.iconHeart}
                    width="24"
                    height="22"
                    id="icon-heart"
                  />
                </button>
              </div>
            </div>
            <div className={css.ratingWrapper}>
              <div className={css.ratingContainer}>
                <Icon
                  className={css.iconRating}
                  width="16"
                  height="16"
                  id="icon-rating"
                />
                <p>
                  {rating}({reviews} Reviews)
                </p>
              </div>
              <div className={css.locationContainer}>
                <Icon
                  className={css.iconLocation}
                  width="16"
                  height="16"
                  id="icon-location"
                />

                <p>{location}</p>
              </div>
            </div>
          </div>
          <p className={css.text}>{description}</p>
          <ul className={css.list}>
            <OptionsItem
              icon={"icon-diagram"}
              text={
                transmission.charAt(0).toUpperCase() + transmission.slice(1) ||
                "Unknown"
              }
            />
            <OptionsItem
              icon={"icon-fuel-pump"} 
              text={
                engine.charAt(0).toUpperCase() + engine.slice(1) || "Unknown"
              }
            />
            {kitchen && <OptionsItem icon={"icon-cup-hot"} text={"Kitchen"} />}
            {AC && <OptionsItem icon={"icon-wind"} text={"AC"} />}
            {water && <OptionsItem icon={"icon-water"} text={"Water"} />}
            {TV && <OptionsItem icon={"icon-tv"} text={"TV"} />}
            {bathroom && (
              <OptionsItem icon={"icon-ph_shower"} text={"Bathroom"} />
            )}
            {gas && (
              <OptionsItem
                className={css.icon}
                icon={"icon-fire"}
                text={"Gas"}
              />
            )}
          </ul>
        </div>
        <LinkButton route={`/catalog/${id}`} text="Show more" width={166} />
      </div>
    </div>
  );
}
