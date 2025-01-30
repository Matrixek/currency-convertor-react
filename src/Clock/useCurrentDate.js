import { useEffect, useState } from "react";

export const useCurrentDate = (date) => {
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

    return date;
};