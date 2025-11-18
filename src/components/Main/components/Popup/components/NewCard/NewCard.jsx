function NewCard() {
  return (
    <form className="popup__form" id="insert-card-form" noValidate>
      <label className="popup__field">
        <input
          type="text"
          className="popup__input"
          id="title-card-input"
          name="name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error title-card-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          className="popup__input"
          id="link-card-input"
          name="link"
          placeholder="Link da imagem"
          required
        />
        <span className="popup__input-error link-card-input-error"></span>
      </label>
      <button type="submit" className="popup__button">
        Criar
      </button>
    </form>
  );
}

export default NewCard;
