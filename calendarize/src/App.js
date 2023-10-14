import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './App.css';
import './calander.js'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <navigator className="navBar">
      <h1 className="nameLogo">CALENDARIZE</h1>
      <button className="addEvent">Add Event</button>
      <button className="profile"><FontAwesomeIcon icon={faUser} /></button>
    </navigator>
  );
}
export default App;