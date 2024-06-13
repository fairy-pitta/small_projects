
import { Router } from "./router/Router"

import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/page1">Page1</Link>
        <br></br>
        <Link to="/page2">Page2</Link>
      </>

      <Router></Router>

    </BrowserRouter>
  );
}
