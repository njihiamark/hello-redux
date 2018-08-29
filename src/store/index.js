import { createStore } from "redux"; //an import from the redux library
import reducer from "../reducers";

const initialState = { tech: "React " };
export const store = createStore(reducer, initialState);  // an incomplete solution - for now.
