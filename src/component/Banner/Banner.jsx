import "../../component/Banner/Banner.css";
export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner_text_container">
        <h3 className="banner_label">New laptop</h3>
        <h1 className="banner_title">Sale up to 50% off</h1>
        <p className="sub_title">12 inch hd display</p>
        <button>Shop now</button>
      </div>
    </div>
  );
}
