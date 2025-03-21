import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndividualPage from "./components/IndividualPage/IndividualPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1></h1>}></Route>
          <Route path="/search" element={<h1>Search Page</h1>}></Route>
          <Route path="/individual" element={<IndividualPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
