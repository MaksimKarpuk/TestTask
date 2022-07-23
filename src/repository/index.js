import connector from "./connector";
import Persons from "./Persons";

class Core {
  connector = connector;
  Persons = Persons;
}

export default new Core();
