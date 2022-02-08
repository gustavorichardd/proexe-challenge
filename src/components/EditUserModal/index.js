import './styles.css'

export function EditUserModal({ id = "modal", onClose = () => { } }) {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">

        <form >
          <div className="form-inputs">
            <div className="form-inputs-personal-information">

              <label htmlFor="id">Id</label>
              <input type="text" id="id" />
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
              <label htmlFor="website">Website</label>
              <input type="text" id="website" />
              <p>Company</p>
              <label htmlFor="companyName">Name</label>
              <input type="text" id="companyName" />
              <label htmlFor="catchPhrase">Catch Phrase</label>
              <input type="text" id="catchPhrase" />
              <label htmlFor="bs">BS</label>
              <input type="text" id="bs" />
            </div>

            <div className="form-inputs-address-information">
              <p>Address</p>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" />
              <label htmlFor="suite">Suite</label>
              <input type="text" id="suite" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" id="zipcode" />
              <p>Geolocations</p>
              <label htmlFor="latitude">Latitude</label>
              <input type="text" id="latitude" />
              <label htmlFor="longitude">Longitude</label>
              <input type="text" id="longitude" />
            </div>
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
// phone: '',
//   website: '',
//     company: {
//   name: '',
//     catchPhrase: '',
//       bs: ''
// }