import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/contact" element={<h1>Contact</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
