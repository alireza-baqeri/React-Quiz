import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { type } from "@testing-library/user-event/dist/type";
// import DateCounter from "./DateCounter";

const initialState = {
  questions: [],
  // "loading", 'error','ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        question: action.payload,
        status: "ready",
      };
    case 'dataFailed':
      return {
        ...state,
        status: "error",
      }
    default:
      throw new Error("Unknown Action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }))}, []);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Main />
      </main>

      {/* <DateCounter/> */}
    </div>
  );
}
