import { observer } from "mobx-react-lite";
import { shoppingList } from "../utilities";
import { SidebarView } from "../views/sidebarView";

const Sidebar = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SidebarPresenter(props){

        function onNumberChangeACB(newNumber) {
            props.model.setNumberOfGuests(newNumber);
        }

        function onChosenDishACB(newDish) {
            props.model.setCurrentDishId(newDish.id);
        }

        function onRemoveDishACB(evt) {
            props.model.removeFromMenu(evt);
        }

        return <SidebarView number={props.model.numberOfGuests}
                            dishes={props.model.dishes}
                            onNumberChange={onNumberChangeACB}
                            onWantedDish={onChosenDishACB}
                            onRemoveDish={onRemoveDishACB}
                            />;
    }
);

export { Sidebar };
