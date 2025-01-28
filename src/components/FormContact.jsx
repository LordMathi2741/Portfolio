import React, { useState } from "react";
import { GmailService } from "../service/gmail.service";

export function FromContact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        GmailService.sendEmail(email, message, name);
    }

    return (
        <form onSubmit={onSubmit}>
           <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            
            <input 
                    type="text" 
                    placeholder="Nombre" 
                    onChange={(e) => setName(e.target.value)} 
                />
                
            <textarea 
                placeholder="Mensaje" 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button type="submit">Enviar</button> 
        </form>
    );
}

export default FromContact;
