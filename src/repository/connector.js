import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL: "https://crudcrud.com/api/920e639d9bd742528bedd5a6230dbb4c",
    });
  }
}

export default new Connector();
