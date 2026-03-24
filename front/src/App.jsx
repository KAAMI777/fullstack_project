import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./pages/land";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fullstack_project/" element={<Land />} />
        <Route path="/fullstack_project/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
