import "../Style/HeroSection.css";
import Header from "./Header";
export default function HeroSection() {
  return (
    <div>
      <Header/>
    <div className="container">
      <div className="left-side">
        <div className="title">
          <h1 id="top">CANON</h1>
          <h1 id="bottom">Camera</h1>
        </div>
        <div className="button-group">
          <div className="shop-now"><a href="#">Shop now</a></div>
          <div className="view-more"><a href="#">View more</a></div>
        </div>
      </div>


      <div className="right-side">
        <div className="camera"><img src="./assets/Camera1.png" alt="" /></div>
      </div>
    </div>
    </div>
  );
}