function EditAvatar() {
  return (
    <form className="popup__form" id="update-avatar-form" novalidate>
      <label className="popup__field popup__field-avatar">
        <input
          type="url"
          className="popup__input"
          id="link-avatar-input"
          name="avatar"
          placeholder="Link do avatar"
          required
        />
        <span className="popup__input-error link-avatar-input-error"></span>
      </label>
      <button type="submit" className="popup__button popup__button-avatar">
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;
