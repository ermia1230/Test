import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure } from "mobx";
import {model} from "/src/DinnerModel.js";
configure({ enforceActions: "never", });  // we don't use Mobx actions in the Lab

const reactiveModel= observable(model);






// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
window.dishesConst= dishesConst;

export {reactiveModel};

