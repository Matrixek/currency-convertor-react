import { useState, useEffect } from "react";
import "./style.css";

const CurrentDate = ({ date }) => {
    const [newDate, setNewDate] = useState(new Date());
   
    useEffect(() => {
        const IntervalId = setInterval(() => {
            setNewDate(new Date());
        }, 1000);
        return () => {
            clearInterval(IntervalId);
        };
    }, []);
   
date = (newDate.toLocaleString(
        undefined,
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"

        },
    ));

    return (
        <p className="form_date">
            {date}
        </p>
    );
};
export default CurrentDate;