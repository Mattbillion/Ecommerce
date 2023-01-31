import { Link, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Middle from "./component/Main/Middle";
import NavBar from "./component/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" />
        <Route path="/Middle" element={<Middle />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
