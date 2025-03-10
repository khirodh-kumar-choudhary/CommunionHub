// src/components/EventForm.js
import React, { useState } from "react";
import { motion } from "framer-motion";

function EventForm({ addEvent }) {
  const [formData, setFormData] = useState({ title: "", date: "", category: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) return;
    addEvent(formData);
    setFormData({ title: "", date: "", category: "", description: "" });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="event-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input type="text" placeholder="Event Title" value={formData.title} 
        onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
      
      <input type="date" value={formData.date} 
        onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />

      <select value={formData.category} 
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      <textarea placeholder="Event Description" value={formData.description} 
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>

      <button type="submit">Add Event</button>
    </motion.form>
  );
}

export default EventForm;
