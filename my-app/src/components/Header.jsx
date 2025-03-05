import React from "react";
import { useState } from "react";

function Calender() {
    const [date, setDate] = useState(new Date());

    const handlePrev = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNext = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];



    return (
        <>
           <div className="header-component">
           <div className="header-text">BUDJET DASHBOARD</div>
            <div className="header-date">
                <button className="previous-button" onClick={handlePrev}>{"<<"}</button>
                <span>
                    {`${monthNames[date.getMonth()]} ${date.getFullYear()}`}
                </span>
                <button className="next-button" onClick={handleNext}>{">>"}</button>
            </div>
           </div>
        </>
    )
}

export default Calender;