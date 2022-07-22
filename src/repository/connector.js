import axios from 'axios'

class Connector {
  connector
  constructor() {
    this.connector = axios.create({baseURL: "https://crudcrud.com/api/ed77f3df16234eebbc0f5f6f001c2d43"})
  }
}

export default new Connector()