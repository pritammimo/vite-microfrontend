
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Counter from "remoteApp/counter";
import Login from "remoteApp/login";
import Dashboard from "./dashboard";
import Test from "./test";
import Counterhost from "./counter";
import Remotecomponent from "remoteApp/remotecomponent";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/Counter2" element={<Counterhost/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/remote" element={<Remotecomponent/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;