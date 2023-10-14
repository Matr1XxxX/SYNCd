import './App.css';
import React, { useState } from 'react';
import TodayCardContainer from './TodayContainer';
import UpcomingCardContainer from './UpcomingContainer';
import Calendar from './calendar';
import Sidebar from './sideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [showLiked, setShowLiked] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleShowLiked = () => {
    setShowLiked(!showLiked);
    console.log(showLiked)
  };
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">SYNCD</h1>
        <button className="likedEvents" onClick={toggleShowLiked}><FontAwesomeIcon icon={faHeart} size="xl" /></button>
        <button className="notifications" onClick={toggleSidebar}><FontAwesomeIcon icon={faBell} size="xl"/></button>      
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <h1 className="todayEvents">Today's Events</h1>
      <TodayCardContainer showLiked={showLiked}/>
      <h1 className="upcomingEvents">Upcoming Events</h1>
      <UpcomingCardContainer showLiked={showLiked}/>
      <div className="calendarContainer">
        <Calendar />
      </div>
    </div>
  );
}
export default App;