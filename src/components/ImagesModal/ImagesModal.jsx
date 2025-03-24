import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "@reduxjs/toolkit";
import css from "../ImagesModal/ImagesModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(15, 15, 15, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "800px",
    maxWidth: "1200px",
    overflow: "hidden",
    padding: "40px 40px",
    WebkitOverflowScrolling: "touch",
    backgroundColor: "rgba(15, 15, 15, 0.1)",
    border: "none",
  },
};
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, gallery }) {
  const settings = {
    dotsClass: `slick-dots ${css.customDots}`,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        {gallery && (
          <Slider {...settings}>
            {gallery.map((img) => (
              <div key={nanoid()}>
                <img src={img.thumb} alt="Truck" style={{ width: "100%" }} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Modal>
  );
}
