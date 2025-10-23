import { shoppingList } from "../utilities";
import { SummaryView } from "/src/views/summaryView.jsx";

export function Summary(props){
    return <SummaryView people={props.model.numberOfGuests}
                        ingredients={shoppingList(props.model.dishes)}/>;
}

