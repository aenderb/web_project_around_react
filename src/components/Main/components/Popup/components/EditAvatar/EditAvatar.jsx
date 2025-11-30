import { useRef, useContext, useCallback } from "react";

import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

function EditAvatar({ onClose }) {
  const avartarInputRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      handleUpdateAvatar({
        avatar: avartarInputRef.current.value,
      });
      onClose();
    },
    [handleUpdateAvatar, onClose]
  );

  return (
    <form
      className="popup__form"
      id="update-avatar-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field popup__field-avatar">
        <input
          type="url"
          className="popup__input"
          id="link-avatar-input"
          name="avatar"
          placeholder="Link do avatar"
          ref={avartarInputRef}
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
