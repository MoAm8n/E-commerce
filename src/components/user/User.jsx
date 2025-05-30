import React from 'react'
import './user.css'
import { useAuth0 } from "@auth0/auth0-react";

const User = ({setCart, setWishlist}) => {
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
    <div className='pageUser  pb-2 pb-lg-0'>
        <div className="user">
            {
                isAuthenticated 
                ? (
                    <>
                    <img src={user.picture} alt={user.name}/>
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
    )
}

export default User