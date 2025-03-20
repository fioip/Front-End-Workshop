import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Melody from "./components/Melody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1></h1>}></Route>
          <Route path="/search" element={<h1>Search Page</h1>}></Route>
          <Route path="/individual" element={<h1>Individual Page</h1>}></Route>
          <Route path="/melody/:id" element={<Melody />}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  );
}

export default App;
