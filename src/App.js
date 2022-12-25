import "./App.css";
import { Routes, Route } from "react-router-dom";
import Read from "./pages/read";
import Create from "./pages/create";
import Layout from "./pages/Layout";
function App() {
  return (
    <div className="App">
      <div className="main">CRUD OPERATION</div>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="create" element={<Create />} />
        <Route path="read" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
