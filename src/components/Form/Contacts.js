import React from "react";

const Contacts = ({ contacts}) => {
    return (
        <ul>
            {contacts.map((contact, idx) => {
                return (
                 <li key= {idx}>{contact}</li>
                )}
                )}
         </ul>
    )
   
}

export default Contacts;