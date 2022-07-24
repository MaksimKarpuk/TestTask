import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL: "https://crudcrud.com/api/7141fdfae7ed49ca9c3a061dd3cb6887",
    });
  }
}

export default new Connector();
