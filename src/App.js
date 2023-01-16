import "./App.css";
import HeroSection from "./component/HeroSection";
import Filter from "./component/Filter";
import ProductSection from "./component/ProductSection";


function App() {
  return (
    <div className="App">
      <HeroSection />
      <Filter />
      <ProductSection />
    </div>
  );
}

export default App;
