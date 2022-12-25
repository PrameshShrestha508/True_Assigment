import "./App.css";
// import Create from "./components/create";
import { Routes, Route } from "react-router-dom";
import Read from "./components/read";
import Create from "./components/create";
import Layout from "./components/Layout";
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
