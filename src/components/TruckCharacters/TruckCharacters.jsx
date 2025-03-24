import { useState } from "react";
import css from "../TruckCharacters/TruckCharacters.module.css";
import Features from "../Features/Features";
import BookForm from "../../shared/BookForm/BookForm";
import Reviews from "../Reviewes/Reviewes";

export default function TruckCharacters() {
  const [activeButton, setActiveButton] = useState("Features");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section>
      <div className={css.btnContainer}>
        <button
          className={`${css.btn} ${
            activeButton === "Features" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleButtonClick("Features")}
        >
          Features
        </button>
        <button
          className={`${css.btn} ${
            activeButton === "Reviews" ? css.active : ""
          }`}
          type="button"
          onClick={() => handleButtonClick("Reviews")}
        >
          Reviews
        </button>
      </div>
      <hr />
      <div
        className={`${css.container} ${
          activeButton === "Reviews" ? css.showReviews : ""
        }`}
      >
        <div className={css.featuresContainer}>
          <Features />
          <BookForm />
        </div>
        <div className={css.reviewsContainer}>
          <Reviews />
          <BookForm />
        </div>
      </div>
    </section>
  );
}
