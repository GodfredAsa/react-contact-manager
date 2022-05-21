import PropTypes from 'prop-types';
import { useState } from 'react';

const Contact = (props) => {
  const { name, email, phone } = props.contact;
  const [showContactInfo, setShowContactInfo] = useState(true);
 
  const onShowDetailHander = (e) => {
      e.preventDefault();
    setShowContactInfo(!showContactInfo);
  }

  const onDeleteClickHandler = () => {
     props.deleteClickHandler(props.contact.id)
  }

  return (
    <div className="card card-body mb-3">
      <h4 className="mr-5"> { name }
        
        <i 
            className="bi bi-arrow-down-circle-fill p-3" 
            onClick={onShowDetailHander}
            style = {{cursor: 'pointer', color: 'gray'}}
        />
        
        <i 
            className = "bi bi-trash" 
            style={{color: 'darkred', float: 'right', cursor: 'pointer'}} 
            onClick={onDeleteClickHandler} 
        />
      </h4>

      <ul className="list-group" hidden={showContactInfo}>
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
      
    </div>
  );
};

// Contact.prototype = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// }

Contact.proptype = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler.PropTypes.func.isRequired
};

export default Contact;
