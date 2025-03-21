import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<h1>Search Page</h1>}></Route>
        <Route path="/individual" element={<h1>Individual Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
