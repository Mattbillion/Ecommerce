import "../Navbar/NavBar.css";
export default function NavBar() {
  return (
    <div className="NavBar__container">
      <img src="./assets/Navigation/E-logo.svg" alt="logo" />
      <div className="search_section">
        <input
          type="search"
          name="Search"
          className="search"
          placeholder="Search any things"
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="navbar_right">
        <div className="login_section">
          <img
            className="user_img"
            src="./assets/Navigation/person.svg"
            alt="avatar"
          />
          <button className="signIn-btn">Sign in</button>
        </div>
        <div className="cart_section">
          <img
            className="card"
            src="./assets/Navigation/cart-fill.svg"
            alt="cart-icon"
          />
          <div className="counter">1</div>
        </div>
      </div>
    </div>
  );
}
