import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import events from './CollegeEvents.json';
import cardTheme from './CardTheme';
import edit from './edit';
    
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const getDaysArray = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };
  const getEventInfo = (day) => {
    const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
  
    const matchingEvents = events.filter((cevent) => {
      const eventFrom = new Date(cevent.eventFrom);
      const eventTo = new Date(cevent.eventTo);
      const eventStartDate = new Date(eventFrom.getFullYear(), eventFrom.getMonth(), eventFrom.getDate());



      return currentDate >= eventStartDate && currentDate < eventTo;
    });
  
    return matchingEvents;
  };
  

  const createCalendar = () => {
    const calendar = [];

    calendar.push(
      <tr key="header">
        {getDaysArray().map((day) => (
          <th key={day} className="header-cell">
            {day}
          </th>
        ))}
      </tr>
    );

    const totalWeeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    for (let week = 0; week < totalWeeks; week++) {
      const row = [];

      for (let day = 0; day < 7; day++) {
        const dayNumber = week * 7 + day + 1 - firstDayOfMonth;
        row.push(
          <td key={day} className="calendar-cell" onClick={() => handleDateClick(dayNumber)}>
            {dayNumber > 0 && dayNumber <= daysInMonth ? (
              <div>
                <div>{dayNumber}</div>
                {getEventInfo(dayNumber).map((cevent, index) => (
                  <div key={index}>
                   <strong style={{background: cardTheme[cevent.eventTheme], color:'white', padding: "0.2em",borderRadius:"0.2em", margin:"0.3em"} }className='cont'>{cevent.eventName}</strong>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </td>
        );
      }

      calendar.push(<tr key={week}>{row}</tr>);
    }

    return calendar;
  };

  const handleDateClick = (day) => {
    if (day > 0 && day <= daysInMonth) {
      // Handle clicks on specific dates if needed
    }
  };

  return (
    <div>
      <h1>Calendar of Events</h1>
      <div className="div-container">
        <button onClick={prevMonth} className="b1">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        &nbsp;&nbsp;
        <span>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        &nbsp;&nbsp;
        <button onClick={nextMonth} className="b2">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <table className="calendar-table">
        <tbody>{createCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
