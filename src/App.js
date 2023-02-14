import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/NavBar.jsx";
import Main from "./component/Main/Main";
import Middle from "./component/Main/Middle";
import Dashboard from "./component/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./component/Dashboard/UI/Products";
import { asideMenu } from "../src/component/Util/data";
import Aside from "./component/Dashboard/AsideMenu/Aside";
import NavBar from "./component/Navbar/NavBar.jsx";
import LoginForm from "./Modal/LoginForm.jsx";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:2021/products")
        .then((res) => setData(res.data));
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  console.log("from app", data);

  return (
    <div>
<<<<<<< HEAD
      {/* <NavBar />
      <LoginForm /> */}
      <Aside asideMenu={asideMenu} /> 
     
=======
      {/* <NavBar /> */}
      {/* <Aside asideMenu={asideMenu} /> */}
>>>>>>> origin/main
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" />
        <Route path="/Middle" element={<Middle />} />
        <Route path="/products" element={<Products data={data} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
