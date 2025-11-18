import OpenImage from "../Popup/components/OpenImage/OpenImage";
function Card(props) {
  const { name, link, isLiked } = props.card;
  const { onImageClick } = props;

  const imageComponent = {
    title: null, // ImagePopup não tem título
    children: <OpenImage card={props.card} />,
  };

  return (
    <li className="card">
      <button className="card__remove-button"></button>
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onImageClick(imageComponent)}
      />
      <div className="card__description">
        <h3 className="card__title">{name}</h3>
        <button className="card__like-button" type="button">
          {isLiked}
        </button>
      </div>
    </li>
  );
}
export default Card;
