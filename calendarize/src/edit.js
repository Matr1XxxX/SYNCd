import React from "react";
import event from './CollegeEvents.json';
function edit(props){
    return(
    <strong className="edit" style={{ background: props.linearGradient,fontSize:'14px',color:'white' }}>{event.eventName}</strong>
    );
}
export default edit;