//import { useContext } from "react";
import React from "react";

import OpenImage from "../Popup/components/OpenImage/OpenImage";
function Card({ card, onCardLike, onCardDelete, onImageClick }) {
  const imageComponent = {
    title: null,
    children: <OpenImage card={card} />,
  };

  const cardLikeButtonClassName = `card__like-button ${
    card.isLiked ? "card__like-button_active" : ""
  }`;

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <li className="card">
      <button
        className="card__remove-button"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={() => onImageClick(imageComponent)}
      />
      <div className="card__description">
        <h3 className="card__title">{card.name}</h3>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          type="button"
        >
          {card.isLiked}
        </button>
      </div>
    </li>
  );
}
export default React.memo(Card);
