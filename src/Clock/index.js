import { useCurrentDate } from "./useCurrentDate"
import { FormDate } from "./styled";


export const Clock = () => {
    const date = useCurrentDate();

    const Formatdate = (date) => date.toLocaleString({
        undefined,
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"

    });
    return (
        <FormDate>
            {Formatdate(date)}
        </FormDate>
    );
};
