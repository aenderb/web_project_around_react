import { useState, useContext, useCallback } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || "");
  const [about, setAbout] = useState(currentUser?.about || "");

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleAboutChange = useCallback((event) => {
    setAbout(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleUpdateUser({ name, about });
      onClose();
    },
    [name, about, handleUpdateUser, onClose]
  );

  return (
    <form
      className="popup__form"
      id="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          id="profile-name-input"
          name="name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleNameChange}
          required
        />
        <span className="popup__input-error profile-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          id="profile-about-input"
          name="about"
          placeholder="Sobre mim"
          minLength="2"
          maxLength="200"
          value={about}
          onChange={handleAboutChange}
          required
        />
        <span className="popup__input-error profile-about-input-error"></span>
      </label>
      <button type="submit" className="popup__button">
        Salvando...
      </button>
    </form>
  );
}
export default EditProfile;
