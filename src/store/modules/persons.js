import Core from "../../repository";
export default {
  state: {
    persons: null,
  },
  getters: {},
  mutations: {
    setPersons(state, value) {
      state.persons = value;
    },
  },
  actions: {
    async getPersons({ commit }) {
      const { value, error } = await Core.Caracters.getPersons();
      console.log(value);
      if (error || !value) {
        console.log("Error");
      } else {
        commit("setPersons", value);
      }
      return { value, error };
    },
  },
};
