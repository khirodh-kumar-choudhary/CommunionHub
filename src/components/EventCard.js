// src/components/EventCard.js
import React from "react";
import { motion } from "framer-motion";

function EventCard({ event }) {
  return (
    <motion.div 
      className="event-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="event-title">{event.title}</h2>
      <p className="event-date">{event.date} • {event.category}</p>
      <p className="event-description">{event.description}</p>
    </motion.div>
  );
}

export default EventCard;
