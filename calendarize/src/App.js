import './App.css';
import TodayCardContainer from './TodayContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus, faBell } from '@fortawesome/free-solid-svg-icons'
import UpcomingCardContainer from './UpcomingContainer';
import Calendar from './calander';
import React, { useState, useEffect } from 'react';

function App() {
  // Initialize favorites from cookies or an empty array
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    // Update the favorites in the cookies whenever it changes
    updateFavoritesCookies();
  }, [favorites]);

  // Function to toggle the favorite status of an event
  const toggleFavorite = (eventId) => {
    if (favorites.includes(eventId)) {
      // If already a favorite, remove it
      setFavorites(favorites.filter(fav => fav !== eventId));
    } else {
      // If not a favorite, add it
      setFavorites([...favorites, eventId]);
    }
  };

  // Function to get favorites from cookies
  function getFavorites() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)favorites\s*=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue ? cookieValue.split(',') : [];
  }

  // Function to update favorites in cookies
  function updateFavoritesCookies() {
    document.cookie = `favorites=${favorites.join(',')}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }

  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">CALENDARIZE</h1>
      </nav>
      <h1 className="todayEvents">Today's Events</h1>
      <TodayCardContainer onToggleFavorite={toggleFavorite} favorites={favorites} />
      <h1 className="upcomingEvents">Upcoming Events</h1>
      <div className="Card-container">
        <UpcomingCardContainer onToggleFavorite={toggleFavorite} favorites={favorites} />
      </div>
    </div>
  );
}

export default App;
