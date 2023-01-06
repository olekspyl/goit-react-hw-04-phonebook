import React from "react";


const Contacts = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((contact, id) => {
                return (
                    <li key={id}>{contact.name} {contact.number }</li>
                )}
                )}
         </ul>
    )
   
}

export default Contacts;