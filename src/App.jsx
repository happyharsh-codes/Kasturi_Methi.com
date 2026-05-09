import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ChatsPage from "./pages/ChatsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chats" element={<ChatsPage />} />
    </Routes>
  );
}

export default App;