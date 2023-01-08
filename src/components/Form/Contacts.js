import React from "react";
import PropTypes from 'prop-types';


const Contacts = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <li key={contact.id}>{contact.name} {contact.number}
                        <button onClick={() => onDelete(contact.id) } > Delete  </button>
                    </li>
                    
                )}
                )}
         </ul>
    )
   
}

Contacts.propTypes = {
    onDelete: PropTypes.func.isRequired, 
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }
    ))

}

export default Contacts;