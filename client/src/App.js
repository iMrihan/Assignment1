import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
