
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./counter";
import Test from "./test";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Test/>} />
      <Route path="/Counter" element={<Counter/>}/>
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;