import React from "react";

function UpcomingCard(props) {
    return (
      <div className="UpcomingCard" style={{ background: props.linearGradient }}>
        <h1 style={{margin:0}}>{props.EventName}</h1>
        <p style={{marginTop:0, marginBottom: '1em', fontSize:'14px', textTransform: "uppercase"}}>{props.EventFrom} to {props.EventTo}</p>
        <p style={{margin:'0.3em', fontSize:'14px',}}>{props.EventDesc}</p>
        <p style={{marginTop:'0.3em',marginLeft:'0.3em', marginBottom: '1em', fontSize:'14px',}}>Criteria: {props.StudentCrit}</p>
        {props.RegStatus > 86400000 ? (
          <button className="regButton">
            <a href={props.RegLink} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
              Register Now!
            </a>
          </button>
          ) : props.RegStatus > 0 ? (
            <button className="regButton">
            <a href={props.RegLink} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
              Closing Soon..
            </a>
          </button>
          ) : (
            <button className="regButton" disabled>
              Closed :/
            </button>
          )
        }
      </div>
    );
  }
  

export default UpcomingCard