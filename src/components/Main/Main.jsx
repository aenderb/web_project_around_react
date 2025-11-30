import { useState, useEffect, useCallback, useContext } from "react";
import pencil from "../../images/Pencil.svg";
import plus from "../../images/Plus.svg";

import Popup from "./components/Popup/Popup";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

function Main() {
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardDelete = useCallback(async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleCardLike = useCallback(async (card) => {
    try {
      const newCard = await api.changeLikeCardStatus(card._id, card.isLiked);

      setCards((prevCards) =>
        prevCards.map((c) => (c._id === card._id ? newCard : c))
      );
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Abrir popup
  const handleOpenPopup = useCallback((popupData) => {
    setPopup(popupData);
  }, []);

  // Fechar popup
  const handleClosePopup = useCallback(() => {
    setPopup(null);
  }, []);

  // Abrir imagem no popup
  const handleImageClick = useCallback((imageComponent) => {
    setPopup(imageComponent);
  }, []);

  const editProfilePopup = {
    title: "Editar perfil",
    children: (
      <EditProfile
        key={currentUser?._id || currentUser?.name || "edit-profile"}
        onClose={handleClosePopup}
      />
    ),
  };
  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar onClose={handleClosePopup} />,
  };

  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard onClose={handleClosePopup} />,
  };

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-wrap">
          <img
            src={currentUser.avatar}
            alt="Avatar"
            className="profile__avatar"
          />
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
            <p className="profile__name">{currentUser.name}</p>

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
          <p className="profile__about">{currentUser.about}</p>
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
            <Card
              key={card._id}
              card={card}
              onImageClick={handleImageClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
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
