
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Counter from "remoteApp/counter";
import Login from "remoteApp/login";
import Dashboard from "./dashboard";
import Test from "./test";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;