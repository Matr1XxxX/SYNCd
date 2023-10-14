import './App.css';
import TodayCardContainer from './TodayContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus, faBell } from '@fortawesome/free-solid-svg-icons'
import UpcomingCardContainer from './UpcomingContainer';
import Calendar from './calander';

function App() {
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">CALENDARIZE</h1>
        {/* <button className="addEvent"><FontAwesomeIcon icon={faCirclePlus} size="xl" /></button>
        <button className="profile"><FontAwesomeIcon icon={faUser} size="xl"/></button>
        <button className="notifications"><FontAwesomeIcon icon={faBell} size="xl"/></button>       */}
      </nav>
      <h1 className="todayEvents">Today's Events</h1>
      <TodayCardContainer />
      <h1 className="upcomingEvents">Upcoming Events</h1>
      <div className="Card-container">
        <UpcomingCardContainer />
        </div>
        <div className="calendarContainer">  
          <Calendar />
        </div>
    </div>
  );
}
export default App;