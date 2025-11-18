function EditProfile() {
  return (
    <form className="popup__form" id="profile-form" noValidate>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          id="profile-name-input"
          name="name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
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
