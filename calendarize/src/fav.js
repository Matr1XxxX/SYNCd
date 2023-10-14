// TodayContainer.js or UpcomingContainer.js (simplified example)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function EventCard({ event, onToggleFavorite, favorites }) {
  const isFavorite = favorites.includes(event.id);

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <button onClick={() => onToggleFavorite(event.id)}>
        <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'black'} />
      </button>
    </div>
  );
}

export default EventCard;
