import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./component/Main/Main";
import Middle from "./component/Main/Middle";
import Dashboard from "./component/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./component/Dashboard/UI/Products";
import { asideMenu } from "../src/component/Util/data";
import Aside from "./component/Dashboard/AsideMenu/Aside";

function App() {
  const [data, setData] = useState();

  // ...destructure
  // const arr = [{key:value},{bkabla:blabal}]
  // arr2 = arr;
  //   const arr2 = [...arr + arr]
  //   arr = [{key:value},{bkabla:blabal}]

  useEffect(() => {
    try {
      axios
        .get("http://localhost:2021/products")
        .then((res) => setData(res.data));
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  console.log(data);

  return (
    <div>
      {/* <NavBar /> */}
      {/* <Aside asideMenu={asideMenu} /> */}
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
