import { useCurrentDate } from "./useCurrentDate"
import { FormDate } from "./styled";


export const Clock = () => {
    const date = useCurrentDate();
    
    return (
        <FormDate>
            {date}
        </FormDate>
    );
};
