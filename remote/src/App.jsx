
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Counter from "./counter";
import Login from "./login";
import Productdetails from "./component/productdetails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}  />
      <Route path="/login" element={<Login/>} />
      <Route path="/Counter" element={<Counter/>}/>
      <Route path="/productdetails" element={<Productdetails/>}/>
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;