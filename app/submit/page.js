"use client";

import { useState } from 'react';

export default function SubmitWriting() {
  const [formData, setFormData] = useState({ name: '', title: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to the server (we'll set this up soon)
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', title: '', text: '' });
    alert("Your writing has been submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Your Writing" required />
      <button type="submit">Submit</button>
    </form>
  );
}
