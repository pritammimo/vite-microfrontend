
import {useState} from 'react'
import axios from "axios";
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { getLoginResponse } from './component/getLoginresponse';
const Login = () => {
  const navigate = useNavigate();
  // const [login, setlogin] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let handleSubmit=(e)=>{
    e.preventDefault();
    const data = {
      email,
      password
    };
    console.log("l",email,password);
    axios
    .post("http://localhost:4000/signin", data)
    .then((response) => {
      localStorage.setItem("userdata",JSON.stringify(response.data));
      navigate('/dashboard', { parentPath: 'host' });
      // Handle success - You can update the state with the response if needed
      
    })
    .catch((error) => {
      // Handle error - You can also set an error state here
      console.error("Error:", error);
    });
  }
  return (
    <div className="login-container">
    <form className="login-form" 
   onSubmit={handleSubmit}
    >
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    {/* {getLoginResponse()?.user?.name} */}
  </div>
  )
}

export default Login

