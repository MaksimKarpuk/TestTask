import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL: "https://crudcrud.com/api/35b4fd06a143487d9e67855f513c71e0",
    });
  }
}

export default new Connector();
