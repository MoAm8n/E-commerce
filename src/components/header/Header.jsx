import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './header.css'

const Header = ({ search, setSearch, headSearch, hideHome, showHome, cart, wishlist, setCart, setWishlist}) => {
    const wishlistCount = Array.isArray(wishlist) ? wishlist.reduce((total, item) => total + (item.qty || 0), 0) :0;
    const cartItemCount = Array.isArray(cart) ? cart.reduce((total, item) => total + (item.qty || 0), 0) : 0;
    
    const [activeLink,setActionLink] = useState(null)
    const handAction = (LinkName) => {
        setActionLink(LinkName)
    }
            const { loginWithRedirect, logout,  user, isAuthenticated   } = useAuth0();
                const handleLogout = () => {
                setCart([])
                setWishlist([])
                localStorage.removeItem('cart')
                localStorage.removeItem('wishlist')
                logout({ logoutParams: { returnTo: window.location.origin } })
                alert("تسجيل الخروج بنجاح ومسح بيانات حضرتك")
            }
    return (
        <>
            <section className='header'>
                <div className="header-top flex px-2 px-md-5">
                    <div className="flex">
                        <button className='btnBlack me-md-2'>Black</button>
                        <h4>Friday</h4>
                    </div>
                    <div className="flex gap-md-2">
                        <span>Up to</span>
                        <h2>59%</h2>
                        <span className='fs-5'>OFF</span>
                    </div>
                    <Link to='/Shop'>
                    <button className='btnShop'>
                        SHOP NOW
                        <i class="fa-solid fa-arrow-right ms-2"></i>  
                    </button>
                    </Link>
                </div>
                <div className="header-end flex px-2 px-md-5">
                    <div className="logo">
                        <Link to="/Home" className='flex'>
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />

                        {/* <img src="../images/logo.png" alt="logo" /> */}
                        <h2 className='text-white'>CLICON</h2>
                        </Link>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Search for anything...' value={search} onChange={(e) => setSearch(e.target.value)} onFocus={hideHome} onBlur={showHome} />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </form>
                    <div className="info flex gap-lg-3 ">
                    <Link to='/wishlist'>
                    <button className='btnShop w-auto px-lg-3 px-1 cart-iconI'>
                        <i class="fa-regular fa-heart"></i>
                        {wishlistCount > 0 && <span className='wishlist-count'>{wishlistCount}</span>}
                    </button>
                    </Link>
                    <Link to='/Cart' className='d-none d-lg-flex'>
                    <button className='btnShop w-auto px-lg-3 px-1 cart-iconI'>
                            <i class="fa-solid fa-cart-shopping"></i>
                        {cartItemCount > 0 && <span className="cart-count text-white">{cartItemCount}</span>}
                    </button>
                    </Link>
                </div>
                </div>
                <div className="header-last flex px-3 px-md-5 d-none d-lg-flex">
                        <div className="user d-lg-flex align-items-center">
                            {
                                isAuthenticated 
                                ? (
                                    <>
                                    {/* <img src={user.picture} alt={user.name}/> */}
                                    <h3><i class="fa-regular fa-circle-user me-2"></i></h3>
                                    <div className=''>
                                        <h4 className=''>
                                            <span className='fs-6 me-1'>✅</span>{user.name}</h4>
                                        <p>{user.email}</p>
                                    </div>
                                    </>
                                ) :
                                    <>
                                        <h3><i class="fa-regular fa-circle-user me-2"></i></h3>
                                        <h4>Please Login</h4>
                                    </>
                            }
                        </div>
                <div className="nav align-items-center ">
                    <div className='navCategory me-2'>
                        <h5 className='flex'>
                            All Category 
                            <i class="fa-solid fa-chevron-down ms-2"></i>
                        </h5>
                    <ul className='flex gap-3'>
                        <li>
                            <Link to="/">Computer & Laptop</Link>
                        </li>
                        <li>
                            <Link to="/">Computer Accessories</Link>
                        </li>
                        <li>
                            <Link to="/">SmartPhone</Link>
                        </li>
                        <li>
                            <Link to="/">Headphone</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="PageLink flex gap-3">
                        <li>
                            <Link to={'/Home'}>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Shop'}>
                            Shop Product
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Cart'}>
                            Shoping Cart
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Wishlist'}>
                            Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Contact'}>
                            Contact
                            </Link>
                        </li>
                    </div>
                </div>
                    <div className="users d-none d-lg-flex ">
                            {
                                isAuthenticated 
                                ? <div className="logout">
                                    <button onClick={handleLogout}><i class="fa-solid fa-right-to-bracket me-2"></i>
                                        <span>Logout</span>
                                    </button>
                                </div>
                                : <div className="login">
                                    <button onClick={() => loginWithRedirect()}><i class="fa-solid fa-right-to-bracket me-2"></i>
                                        <span>Login</span>
                                    </button>
                                </div>
                            }
                    </div>
                </div>
            </section>
            <section className='header-bottom d-lg-none'>
                <div className="container">
                    <ul className='flex justify-content-center gap-4'>
                        <li>
                        <Link to={'/Home'} className={`nav-link ${activeLink === "Home" ? 'active' : ''}`}
                        onClick={() => handAction('Home')} >
                            <i class="fa-solid fa-house"></i>
                            <span>Home</span>
                        </Link>
                        </li>
                        <li>
                        <Link to={'/Shop'} className={`nav-link ${activeLink === "Shop" ? 'active' : ''}`}
                        onClick={() => handAction('Shop')}>
                            <i class="fa-solid fa-table"></i>
                            <span>Categories</span>
                        </Link>
                        </li>
                        <li className='userHeader'>
                        <Link to={'/User'} className={`nav-link ${activeLink === "User" ? 'active' : ""}`} 
                        onClick={() => handAction("User")}>
                            <i class="fa-solid fa-user"></i>
                            <span>Account</span>
                        </Link>
                        </li>
                        <li>
                            <Link to={'/Contact'} className={`nav-link ${activeLink === "Contact" ? 'active' : ''}`}
                            onClick={() => handAction('Contact')}>
                                <i class="fa-solid fa-comment"></i>
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className='cart-icon'>
                        <Link to={'/Cart'} className={`nav-link ${activeLink === "Cart" ? 'active' : ""}`} 
                        onClick={() => handAction("Cart")}>
                            <i class="fa-solid fa-cart-shopping"></i>
                            {cartItemCount > 0 && <span className="cart-count text-white">{cartItemCount}</span>}
                            <span>Cart</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Header