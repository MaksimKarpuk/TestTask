
import {createStore} from "vuex";
import persons from "./modules/persons";


export default createStore({
  modules: {
    persons,
  },
});
