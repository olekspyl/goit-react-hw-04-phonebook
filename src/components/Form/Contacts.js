import React from "react";
import PropTypes from 'prop-types';
import {ListItem, DeleteButton} from './App.styled'


const Contacts = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <ListItem key={contact.id}>{contact.name} {contact.number}
                        <DeleteButton onClick={() => onDelete(contact.id) } > Delete  </DeleteButton>
                    </ListItem>
                    
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