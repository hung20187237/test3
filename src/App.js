import "./App.css";
import {
  Route,
  RouteProps,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
