import { BrowserRouter, Routes, Route } from "react-router-dom";
import Land from "./pages/land";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fullstack_project/" element={<Land />} />
        <Route path="/fullstack_project/sign-up" element={<SignUp />} />
        <Route path="/fullstack_project/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
