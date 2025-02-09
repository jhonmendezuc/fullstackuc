import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Books.jsx";
import Authors from "./Authors.jsx";
import NavBar from "./NavBar.jsx";
const BookShop = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  );
};

export default BookShop;
