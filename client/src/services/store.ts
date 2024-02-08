import { createStore } from "redux";

const dummyreducer = () => {
  return 100;
};

const store = createStore(dummyreducer);

export default store;
