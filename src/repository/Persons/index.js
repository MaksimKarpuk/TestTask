
import Connector from "../connector";

class Persons {
  getPersons = async () => {
    const result = {
        value: null,
        error: null
    }
    try {
      const response =  await Connector.connector.get("/todos");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result
  };
  postPersons = async () => {
    const result = {
        value: null,
        error: null
    }
    try {
      const response =  await Connector.connector.post("/todos", user);
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result
  };
}
export default new Persons();
