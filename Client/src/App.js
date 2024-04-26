import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Forgotpwd from "./pages/Forgotpwd";
import Front from "./pages/Front";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Front />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Forgotpwd" element={<Forgotpwd />} />
          <Route path="/Chatbot" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
