import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      baseURL: "https://crudcrud.com/api/88e887f38cbc4286a375792cb8842d0b",
    });
  }
}

export default new Connector();
