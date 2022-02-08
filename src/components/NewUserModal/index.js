import './styles.css'

export function NewUserModal({ id = "modal", onClose = () => { } }) {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">

        <form>
          <div className="form-inputs">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-buttons">
            <button type="submit" className='submit-button'>Submit</button>

            <button type="submit" className='close-button' onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}