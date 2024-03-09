
import Button from "./Button";
import './App.css'
import useCount from './store';
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useCount()
  let loginResponseData = localStorage.getItem("userdata");
  console.log(loginResponseData);
  return (
    <div className="App">
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Link to="/test">Click now</Link>
    </div>
  )
}

export default Counter
