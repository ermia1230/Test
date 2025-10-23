import { SidebarView } from "../views/sidebarView";

export function Sidebar(props) {

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
                        
                        />
}