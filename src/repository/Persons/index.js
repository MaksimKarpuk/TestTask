import Connector from "../connector";

class Persons {
  getPersons = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/todos");
      result.value = response.data;
    } catch (error) {
      result.error = error.data;
    }
    return result;
  };
  postPerson = async (user) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post("/todos", user);
      result.value = response.data;
    } catch (error) {
      result.error = error.data;
    }
    return result;
  };
  changePerson = async (user) => {
    try {
      await Connector.connector.delete(`/todos/${user._id}`, user.text);
    } catch (error) {
      console.log("Repo Error");
    }
  };
  deletePerson = async (id) => {
    try {
      await Connector.connector.delete(`/todos/${id}`);
    } catch (error) {
      console.log("Repo Error");
    }
  };
  changePerson = async (user) => {
    try {
      await Connector.connector.put(`/todos/${user.id}`, {
        firstName: user.firstName,
        secondName: user.secondName,
      });
    } catch (error) {
      console.log("Error");
    }
  };
}
export default new Persons();
