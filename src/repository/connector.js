import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL: "https://crudcrud.com/api/88e887f38cbc4286a375792cb8842d0b",
    });
  }
}

export default new Connector();
