import { useCurrentDate } from "./useCurrentDate"
import "./style.css";


export const Clock = () => {
    const date = useCurrentDate();
    
    return (
        <p className="form_date">
            {date}
        </p>
    );
};
