
import './App.css';
import Button from "packagesApp/Button";
import useStore from "packagesApp/store";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useStore()
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
      <Link to="/Counter2">Click now</Link>
    </div>
  )
}

export default Counter
