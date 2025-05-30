import React from 'react'
import { Link } from 'react-router-dom'
const Wishlist = ({wishlist, setWishlist, checkedCart, checkWishlist}) => {

  const removeWishlist = (product) => {
    const exist = wishlist.find((x) => {
      return x.id === product.id
    })
    if(exist){
      setWishlist(wishlist.filter((y) => {
        return y.id !== product.id
      }))
    } 
  }
      const wishlistCount = Array.isArray(wishlist)
        ? wishlist.reduce((total, item) => total + (item.qty || 0), 0)
        : 0;
  return (
    <>
      <section className="wishlist  pb-5 pb-lg-0">
        <div className="cart-header p-2 ps-4">
            <ul className='flex justify-content-start gap-3 p-lg-3'>
                <li>
                    <Link to='/Home'>
                    <i className="fa-solid fa-house me-2"></i>
                    Home
                    </Link>
                </li>
                <li>
                    <Link className='text-primary'>
                    <i className="fa-solid fa-arrow-right me-2"></i>
                    Wishlist
                    </Link>
                </li>
            </ul>
        </div>
        <div className="container p-4">
          <div className="row gap-5">
            <div className="cart-items col-12">
              <h3 className='pb-3 p-3'>Wishlist : {wishlistCount}</h3>
              {
                wishlist.length === 0 && 
                <>
                  <div className="empty text-center p-5">
                    <h2>Your Shopping Cart Empty</h2>
                    <Link to='/Shop'>
                    <button className='shopBtn text-white my-3'>Shop Now</button>
                    </Link>
                  </div>
                </>
              }
              {
                wishlist.map((item) => {
                  return(
                    <div className="wishlist-item flex" key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <h6>{item.title}</h6>
                      <h5>$ {item.price}</h5>
                      <h5 className='text-warning'>{item.stock}</h5>
                      <Link to='/cart'><button onClick={() => checkedCart(item)} className='shopBtn text-white'>ADD To CART <i class="fa-solid fa-arrow-right me-2"></i></button></Link>
                      <button className="rounded-5 removeBtn" onClick={()=> removeWishlist(item)}>
                        <i class="fa-solid fa-xmark fs-5"></i>
                      </button>
                    </div>
                  )
                })
              }
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist