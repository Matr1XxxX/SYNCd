import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Calendar.css';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const updateCalendar = () => {
    setEvents((prevEvents) => {
      const newEvents = { ...prevEvents };

      for (let day = 1; day <= daysInMonth; day++) {
        const key = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
        newEvents[key] = newEvents[key] || [];
      }
      const mockevent = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-14`;
      newEvents[mockevent] = ['Mock Event'];


      return newEvents;
    });
  };

  const showEvents = (day) => {
    const key = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
    const eventList = events[key] ? events[key].map((event, index) => <li key={index}>{event}</li>) : null;

    alert(`Events for ${selectedDate.toLocaleDateString()}-${day}:`, <ul>{eventList}</ul>);
  };

  const saveEvent = (day, event) => {
    const key = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${day}`;
    setEvents((prevEvents) => ({
      ...prevEvents,
      [key]: [...(prevEvents[key] || []), event],
    }));
  };

  const prevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const getDaysArray = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };


const createCalendar = () => {
  const calendar = [];
  let dayIndex = 0;

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
          {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ''}
        </td>
      );
    }

    calendar.push(<tr key={week}>{row}</tr>);
  }

  return calendar;
};


  const handleDateClick = (day) => {
    if (day > 0 && day <= daysInMonth) {
      showEvents(day);
    }
  };

  return (
    <div>
      <h1>Calendar of Events</h1>
      <div classname="div-container">
        <button onClick={prevMonth} className="b1"><FontAwesomeIcon icon={faArrowLeft} /></button>&nbsp;&nbsp;
        <span>{selectedDate.toLocaleString('default',{ month: 'long', year: 'numeric' })}</span>&nbsp;&nbsp;
        <button onClick={nextMonth} className="b2"><FontAwesomeIcon icon={faArrowRight}/></button>
      </div>
      <table className="calendar-table">
        <tbody>{createCalendar()}</tbody>
      </table>
    </div>

)};

export default Calendar;
