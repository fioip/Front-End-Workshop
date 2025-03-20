import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MostListened from "./components/MostListened";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1></h1>}></Route>
          <Route path="/search" element={<h1>Search Page</h1>}></Route>
          <Route path="/individual" element={<h1>Individual Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />

      <MostListened />
    </>
  );
}

export default App;
