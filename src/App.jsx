import { Route, Routes } from "react-router-dom";
import "./style/pages.scss";
import "./style/todo.scss";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
