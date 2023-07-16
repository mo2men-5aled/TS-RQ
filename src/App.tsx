import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home.page";
import SuperHeros from "./pages/SuperHeros.page";
import RQSuperHeros from "./pages/RQSuperHeros.page";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heros">Super Heros</Link>
            </li>
            <li>
              <Link to="/rq-super-heros">RQ Super Heros</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heros" element={<SuperHeros />} />
          <Route path="/rq-super-heros" element={<RQSuperHeros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
