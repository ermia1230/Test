import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { reactive } from "vue";
import { model } from "./DinnerModel";

const reactiveModel= reactive(model);




// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel= reactiveModel;

// making some example dishes available 
import {dishesConst} from "/src/dishesConst.js";
import react from "react";
window.dishesConst= dishesConst;

export {reactiveModel};