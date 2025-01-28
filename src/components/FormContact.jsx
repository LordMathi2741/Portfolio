import React, { useState } from "react";
import { GmailService } from "../service/gmail.service";

export function FromContact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    function clearForm() {
        setEmail("");
        setMessage("");
        setName("");
    }

    async function onSubmit(e) {
        e.preventDefault();
        await GmailService.sendEmail(email, message, name).then(() => {
            clearForm();
        });
    }

    return (
        <form onSubmit={onSubmit}>
           <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            
            <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                
            <textarea 
                placeholder="Mensaje" 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button type="submit">Enviar</button> 
        </form>
    );
}

export default FromContact;
