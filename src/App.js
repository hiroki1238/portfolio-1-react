import "./App.css";
import BlogPage from "./components/BlogPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// BrowserRouterをRouterという名前で定義した

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* <Routes>でルーティングしたいものを囲む */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
