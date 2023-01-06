import "../Style/Header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="left">
        <img src="./assets/logo.svg" alt="logo" />
        <div className="search-bar">
          <input
            type="field"
            name="search"
            className="Search-input"
            id="#"
            placeholder="Search any items"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="right">
        <div className="Login">
          <img src="./assets/user.svg" alt="user" />
          <div className="Sign-in"></div>
        </div>
        <div className="cart">
          <img src="./assets/shopping-cart.svg" alt="cart" />
          <div className="orders">
            <div className="shape">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
