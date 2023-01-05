import React from "react";


const Contacts = ({ contacts }) => {
    return (
        <ul>
            {contacts.map((contact, idx) => {
                return (
                    <li key={idx}>{contact.name} {contact.number }</li>
                )}
                )}
         </ul>
    )
   
}

export default Contacts;