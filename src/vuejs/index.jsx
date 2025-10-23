import { createApp, h } from "vue";
window.React= {createElement:h};  // needed in the lab because it works with both React and Vue
import { reactiveModel } from "../vueReactiveModel.js";
import {VueRoot} from "./VueRoot.jsx"

// mount the app in the browser page. Test at http://localhost:8080/vue.html
const app= createApp(function render(){ return <VueRoot model={reactiveModel} ></VueRoot>;});
app.mount('#root'); 



