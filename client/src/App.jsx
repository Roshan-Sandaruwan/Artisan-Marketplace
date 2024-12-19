import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutusPage from "./pages/AboutusPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";

//import Header from "./components/Header";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/aboutus" element={<AboutusPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
