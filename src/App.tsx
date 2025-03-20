import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/search" element={<h1>Search Page</h1>}></Route>
        <Route path="/individual" element={<h1>Individual Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
