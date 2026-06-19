import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
// import DateCounter from "./DateCounter";

const intialState; = {}
function reducer(state, action) {
  
}

export default function App() {
  const [state,dispatch] = useReducer(reducer,intialState)

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error("Error"))
  }, []);

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
