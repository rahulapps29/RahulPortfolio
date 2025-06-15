import React, { useState } from "react";
import "./WhatsAppMessagePage.css";

export default function WhatsAppMessagePage() {
  const [isd, setIsd] = useState("+91");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(null);

  const formatNumber = () => {
    const raw = number.trim().startsWith("+")
      ? number.trim()
      : `${isd}${number.trim()}`;
    return raw.replace(/\D/g, "");
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErr(null);
    const finalNum = formatNumber();
    if (!/^\d{7,15}$/.test(finalNum)) {
      setErr("Please enter a valid phone number.");
      return;
    }
    if (!message.trim()) {
      setErr("Message cannot be empty.");
      return;
    }

    const waURL = `https://wa.me/${finalNum}?text=${encodeURIComponent(
      message.trim()
    )}`;
    window.open(waURL, "_blank");
  };

  return (
    <div className="wa-wrapper">
      <form className="wa-card" onSubmit={handleSend}>
        <h2>Send WhatsApp Message</h2>

        <label className="form-label">Country Code (e.g. +91)</label>
        <input
          type="text"
          className="input"
          value={isd}
          onChange={(e) => setIsd(e.target.value)}
          placeholder="+91"
        />

        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Mobile No."
        />

        <label className="form-label">Message</label>
        <textarea
          className="textarea"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        {err && <p className="status error">{err}</p>}

        <button type="submit" className="send-btn">
          Open in WhatsApp
        </button>
      </form>
    </div>
  );
}
