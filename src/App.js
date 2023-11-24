import "./App.css";
import { Header } from "./Common/Header/Header";
import Account from "./Components/Account/Account";
import Foodcourt from "./Components/Foodcourt/Foodcourt";
import Home from "./Components/Home/Home";
import Resturant from "./Components/Resturant/Resturant";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./Common/Footer/Footer";
import Otp from "./Components/Account/Otp";
import Corporatecode from "./Components/Account/Corporatecode";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
       
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="foodcourt" element={<Foodcourt />} />
            <Route path="resturant" element={<Resturant />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/otp" element={<Otp />} />
            <Route exact path="/corporatecode" element={<Corporatecode />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
