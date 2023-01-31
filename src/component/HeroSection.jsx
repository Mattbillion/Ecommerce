import "../Style/HeroSection.css";
export default function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-section">
        <div className="hero-left">
          <h1 className="Slogan">Perfection for all. Everything you need.</h1>
          <h1 className="Brand">Alpha 7 III - Full-frame Interchangeable Lens Camera 24.2MP, 10FPS, 4K/30p</h1>
        <div className="btn-group">
          <ul>
            <li className="shop-now">Shop now</li>
            <li className="view-more">View more</li>
          </ul>
        </div> 
      </div>

        <div className="hero-right">
        <img className="camera" src=".\assets\Hero-section\Camera1.png" alt="Camera" />
        </div>
        </div>
      </div>
    </div>
  );
}