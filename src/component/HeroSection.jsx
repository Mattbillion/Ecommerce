import "../Style/HeroSection.css";
export default function HeroSection() {
  return (
    <div className="Section-container">
      <div className="left-side">
        <div className="title">
          <h1>Canon</h1>
          <h1 className="regular">Camera</h1>
        </div>

        <ul className="purchase-btn">
          <li>
            <a className="shop-btn" href="a">
              Shop now
            </a>
          </li>
          <li>
            <a className="View-btn" href="a">
              View more
            </a>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <img src="./assets/Camera.png" alt="camera-pic" />
      </div>
    </div>
  );
}