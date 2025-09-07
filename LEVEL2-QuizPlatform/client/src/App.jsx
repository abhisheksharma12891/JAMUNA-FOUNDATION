import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizList from "./pages/QuizList";
import QuizPlay from "./pages/QuizPlay";
import Result from "./pages/Result";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#004aad", color: "white" }}>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/quizzes" style={{ margin: "10px", color: "white" }}>Quizzes</Link>
        <Link to="/auth" style={{ margin: "10px", color: "white" }}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<QuizPlay />} />
        <Route path="/result" element={<Result />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
