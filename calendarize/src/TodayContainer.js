import React, { useRef, useState } from 'react';
import TodayCard from './Today';
import CollegeEvents from './CollegeEvents.json';
import cardTheme from './CardTheme';
import regStatus from './RegStatus';


function TodayCardContainer() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.pageX - containerRef.current.offsetLeft);
  setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
  setIsDragging(false);
  };

  const handleMouseMove = (e) => {
  if (!isDragging) return;
  const x = e.pageX - containerRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
    className= "todayCardContainer"
    ref={containerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    >
      {CollegeEvents.map(cEvent => {
        const eventFromDate = new Date(cEvent.eventFrom);
        const eventToDate = new Date(cEvent.eventTo);
        const today = new Date();
        const formattedFromDate = eventFromDate.toLocaleDateString('en-IN', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          hour12: true,
        });
        const formattedToDate = eventToDate.toLocaleDateString('en-IN', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          hour12: true,
        });
        console.log(cardTheme[cEvent.eventTheme])
        const gradientStyle = cardTheme[cEvent.eventTheme];
        
        if (
          eventFromDate.getDate() === today.getDate() &&
          eventFromDate.getMonth() === today.getMonth() &&
          eventFromDate.getFullYear() === today.getFullYear()
        ) {
          
          return(
            <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          >
          <TodayCard 
          EventName={cEvent.eventName} 
          EventFrom={formattedFromDate} 
          EventTo={formattedToDate} 
          EventDesc={cEvent.eventDesc}
          RegLink={cEvent.regLink}
          RegStatus={cEvent.regStatus}
          linearGradient={gradientStyle}
          />
          </div>
          )
        }else {
          return null;
        }
      })
      }
      <div className="todayGradient"></div>
    </div>
  );
}

export default TodayCardContainer;
