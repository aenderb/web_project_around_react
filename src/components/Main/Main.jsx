import { useState } from "react";
import pencil from "../../images/Pencil.svg";
import plus from "../../images/Plus.svg";
import avatar from "../../images/Jaques_cousteau_pic.jpg";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick(imageComponent) {
    setPopup(imageComponent);
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img src={avatar} alt="Avatar" className="profile__avatar" />
          <button
            className="profile__avatar-update"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              className="profile__avatar-update-img"
              src={pencil}
              alt="Lápis para atualizar avatar"
            />
          </button>
        </div>
        <div className="profile__container">
          <div className="profile__description">
            <p className="profile__name">Jacques Cousteau</p>

            <button
              className="profile__button-edit"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img
                className="profile__button-edit-img"
                src={pencil}
                alt="Lapis para edição"
              />
            </button>
          </div>
          <p className="profile__about">Explorador</p>
        </div>

        <button
          className="profile__button-add"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img className="profile__button-add-img" src={plus} alt="" />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleImageClick} />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
