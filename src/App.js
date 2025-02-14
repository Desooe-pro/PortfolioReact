import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
      <BR>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />}/>
              </Route>
          </Routes>
      </BR>
  );
}

export default App;
