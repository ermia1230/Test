import { Sidebar } from "./SidebarPresenter.jsx";
import { Summary } from "./summaryPresenter.jsx";

// const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props){
    return (<div>
                <div><Sidebar model={props.model}></Sidebar></div>
                <div><Summary model={props.model} /></div>
            </div>
           );
}
// )

export { ReactRoot }
