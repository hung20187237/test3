import "./App.css";
import {
  Route,
  RouteProps,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/friend" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
