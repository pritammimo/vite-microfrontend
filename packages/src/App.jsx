
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div>
          <h1>Welcome to our website</h1>
        </div>
      }  />
      </Routes>
    </BrowserRouter>





  </>
  );
}

export default App;