import React from 'react'
import './homeProduct.css'
import { Link } from 'react-router-dom'
const HomeProducts = ({ activeFilter , filterProduct, product, checkedCart, checkWishlist, eyeShow, homeHided}) => {
  return ( 
    <>  
    
      <section className="homeProducts py-4">
        <div className="container">
          <div className="row">
          <div className="homeProducts-left col-lg-3 p-0 m-0">
            <div className="title p-2 mt-lg-4">
              <span>COMPUTER & ACCESSORIES</span>
              <h2 className='fw-bold mb-lg-2'>32% Discount</h2>
              <p className='mb-lg-3'>For all ellectronics products</p>
              <div className='d-flex align-items-center flex-column justify-content-center'>
                <span className='text-dark'>Offers ends in:</span>
                <span className='bg-white p-2 text-dark'>ENDS OF CHRISTMAS</span>
              </div>
              <Link to={'/Shop'}>
              <button className="shopBtn text-white rounded-0 mt-lg-4">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
              </Link>
            </div>
              {/* <img src="../images/homeProduct/Image-left.jpg" alt="" /> */}
              <img src={`${process.env.PUBLIC_URL}/Image-left.jpg`} alt="" />
          </div>
          <div className="homeProducts-content col-lg-9 ">
            <div className="list-content d-flex align-items-center justify-content-between">
              <h3>Featured Products</h3>
              <ul className='list d-flex align-items-center gap-lg-3'>
                <li onClick={() =>{filterProduct("all")}}
                  className={activeFilter === "all" ? "active" : ""}>All Product</li>
                <li onClick={() => filterProduct("mobile")}
                className={activeFilter === "mobile" ? "active" : ""}>Smart Phone</li>
                <li onClick={() => filterProduct("laptop")}
                  className={activeFilter === "laptop" ? "active" : ""}>Laptop</li>
                <li onClick={() => filterProduct("headphone")} 
                className={activeFilter === "headphone" ? "active" : ""}>Headphone</li>
                <li onClick={() => filterProduct("tv")}
                className={activeFilter === "tv" ? "active" : ""}>TV</li>
                <Link to={'/Shop'}>
                <button className="shopBtn text-white rounded-0">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
                </Link>
              </ul>
            </div>
            <div className="product-list py-3">
              {product.map((item) => (
                <div className="product-box">
                  <img src={item.image} alt={item.title} />
                  <div className="start my-1 d-flex">
                    <span>{item.start}</span>
                    <span>{item.end}</span>
                  </div>
                  <h6>{item.title}</h6>
                  <p>
                    <span className='text-secondary text-decoration-line-through me-2' style={{
                      display: item.discount !== "" ? "inline" : "none"}}>$ {item.discount}</span>
                    $ {item.price} 
                  </p> 
                  <button style={{display: item.offPrice !=="" ? "block" : "none", 
                                  background: item.offPrice === "Hot" ?  "#EE5858" : "#EFD33D", 
                                  color: item.offPrice === "Hot" ? "#fff" : "#000" }}>
                  {item.offPrice}
                  </button>
                  <div className='product-btn'>
                    <Link onClick={() => checkWishlist(item)}>
                      <button><i class="fa-regular fa-heart"></i></button>
                    </Link>
                    <Link onClick={() => checkedCart(item)}>
                      <button><i class="fa-solid fa-cart-shopping"></i></button>
                    </Link>
                    <Link onClick={() => eyeShow(item)}>
                      <button><i class="fa-regular fa-eye"></i></button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProducts