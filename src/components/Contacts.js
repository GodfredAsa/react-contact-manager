import Contact from "./Contact";
import React from 'react'
import { useState } from "react";

const Contacts = () => {
   const contacts = [
        {
            id: 1,
            name: "John Doe",
            email: "john@epals.com",
            phone: "0548670632"
        },
        {
            id: 2,
            name: "Karen Williams",
            email: "karwill@epals.com",
            phone: "0548870632"
        },
        {
            id: 3,
            name: "Mary Jane",
            email: "mariajones@epals.com",
            phone: "0548870962"
        },

        {
            id: 4,
            name: "Suzzy Williams",
            email: "mariajones@epals.com",
            phone: "0548870962"
        }
    ]

    const [Contacts, setContacts] = useState(contacts);

    const deleteContactHandler = (id) =>{
        const newContacts = Contacts.filter(contact => contact.id !==id)
        setContacts(newContacts)
        console.log(Contacts)
    };

    return ( 
        <React.Fragment>
             {Contacts.map(contact => 
             <Contact 
                key = {contact.id} 
                contact = {contact} 
                deleteClickHandler = {deleteContactHandler} 
                id = {contact.id}/> )}
        </React.Fragment> 
     );
}
 
export default Contacts;