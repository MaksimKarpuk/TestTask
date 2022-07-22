import Core from "../../repository";
export default {
  state: {
    persons: null,
    content : hello
  },
  getters: {},
  mutations: {
    setPersons(state, value) {
      state.persons = value;
    },
    postPersons(state, value) {
      state.content = value;
    },
  },
  actions: {
    async getPersons({ commit }) {
      const { value, error } = await Core.Persons.getPersons();
      console.log(value);
      if (error || !value) {
        console.log("Error");
      } else {
        commit("setPersons", value);
      }
      return { value, error };
    },
    async postPersons({ commit }) {
      const { value, error } = await Core.Persons.postPersons(user);
      console.log(value);
      if (error || !value) {
        console.log("Error");
      } else {
        commit("postPersons", value);
      }
      return { value, error };
    },
  },
};
