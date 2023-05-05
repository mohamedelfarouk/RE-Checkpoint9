import React from "react";
import TodoPage from "./pages/TodoPage";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
