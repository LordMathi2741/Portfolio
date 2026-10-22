import React, { useState } from "react";
import { GmailService } from "../service/gmail.service";

export function FromContact({ submitLabel, ...props }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    // idle | sending | success | error
    const [status, setStatus] = useState("idle");

    function clearForm() {
        setEmail("");
        setMessage("");
        setName("");
    }

    async function onSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        try {
            await GmailService.sendEmail(email, message, name);
            clearForm();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    const statusText = {
        sending: props.sendingLabel,
        success: props.successLabel,
        error: props.errorLabel,
    }[status];

    return (
        <form onSubmit={onSubmit}>
            <label className="field">
                <span>{props.namePlaceholder}</span>
                <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label className="field">
                <span>{props.emailPlaceholder}</span>
                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label className="field">
                <span>{props.messagePlaceholder}</span>
                <textarea
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>

            <button type="submit" disabled={status === "sending"}>{submitLabel}</button>

            <p className={`form-status form-status--${status}`} role="status">
                {statusText}
            </p>
        </form>
    );
}

export default FromContact;
