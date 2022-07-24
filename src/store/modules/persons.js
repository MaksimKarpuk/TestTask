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
    changePerson(state, user) {
      state.persons = state.persons.map((pers) =>
        pers._id === user.id
          ? { ...pers, firstName: user.firstName, secondName: user.secondName }
          : pers
      );
    },
  },
  actions: {
    async getPersons({ commit }) {
      const { value, error } = await Core.Persons.getPersons();
      if (error || !value) {
        console.log("Error");
      } else {
        commit("setPersons", value);
      }
      return { value, error };
    },

    async postPerson({ commit }, user) {
      const { value, error } = await Core.Persons.postPerson(user);
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
    async changePerson({ commit }, user) {
      await Core.Persons.changePerson(user);
      commit("changePerson", user);
    },
  },
};
