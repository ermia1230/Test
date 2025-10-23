import { dishType, menuPrice, sortDishes } from "../utilities";
import "/src/style.css";

export function SidebarView(props){

    function minusClickACB(evt) {
        props.onNumberChange(props.number-1);
    }

    function plusClickACB(evt) {
        props.onNumberChange(props.number + 1);
    }

    return  (

        <div>
            <button disabled={props.number === 1} onClick={minusClickACB}>-</button>
            {props.number}
            <button onClick={plusClickACB}>+</button>


            <table>
                <tbody>
                    {sortDishes([...props.dishes]).map(renderDishesCB)}

                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td className="textAlign">{(menuPrice(props.dishes)* props.number).toFixed(2)}</td>
                    </tr>
                </tbody>
                
            </table>


        </div>

    );


    function renderDishesCB(dish) {
        
        function actionACB(evt) {
            props.onWantedDish(dish);
        }

        function eventHandlerForXClickACB() {
            props.onRemoveDish(dish);
        }

        return (
            <tr key={dish.id}>
                <td><button onClick={eventHandlerForXClickACB}>x</button></td>
                <td><a href="#" onClick={actionACB}>{dish.title}</a></td>
                <td>{dishType(dish)}</td>
                <td className="textAlign"> {(dish.pricePerServing * props.number).toFixed(2)} </td>
            </tr>

        )


    }
}
