import Core from "../../repository";
export default {
  state: {
    persons: [],
  },
  getters: {},
  mutations: {
    setPersons(state, value) {
      state.persons = value;
    },
    postPerson(state, value) {
      state.persons.push(value);
    },
    deletePerson(state, id) {
      state.persons = state.persons.filter((pers) => pers._id !== id);
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

    async postPerson({ commit }, user) {
      const { value, error } = await Core.Persons.postPerson(user);
      console.log(value);
      if (error || !value) {
        console.log("Error");
      } else {
        commit("postPerson", value);
      }
      return { value, error };
    },

    async deletePerson({ commit }, id) {
      await Core.Persons.deletePerson(id);
      commit("deletePerson", id);
    },
  },
};
