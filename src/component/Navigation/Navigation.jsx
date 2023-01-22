import '../Navigation/Navbar.css';
export default function Navigation() {
    return (
        <div className="nav-container">
                <div className="logo"><img src="./assets/Navigation/E-logo.svg" alt="logo"/>
                </div>
            <div className="search-container">
                <form action=''>
                    <input type='text' placeholder='Search any things' name="Search"></input>
                    <button type='Submit'>Search</button>
                </form>
            </div>

            <div className="nav-right">
                <div className="login">
                <img className="person" src='./assets/Navigation/person.svg'></img>
                    <span className='SignIn'>Sign In</span>
                </div>

                <div className="cart">
                <img className="cart-icon" src='./assets/Navigation/cart-fill.svg'></img>
                <div className="circle">1</div>
                </div>
            </div>
        </div>
        
    );
}