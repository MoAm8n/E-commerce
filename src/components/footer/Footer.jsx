import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <>
      <section className="footerTop">
        <div className="container">
          <div className="title">
            <h4 className='text-white'>Subscribe to our newsletter</h4>
            <p className='text-white-50 w-75 m-auto my-3'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            <form action="">
              <input type="text" placeholder='Email address'/>
              <button className='shopBtn text-white'>SUBSCRIBE <i class="fa-solid fa-arrow-right"></i></button>
            </form>
            <hr />
            <div className="images flex justify-content-center gap-lg-3 gap-2 ">
              <img src="../images/footer/image1.png" alt="" />
              <img src="../images/footer/image2.png" alt="" />
              <img src="../images/footer/image3.png" alt="" />
              <img src="../images/footer/image4.png" alt="" />
              <img src="../images/footer/image5.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className='col-lg-3 col-6 '>
              <div className="logo pb-3">
                <img src="../images/footer/Logo.png" alt="" />
              </div>
              <ul>
                <li>Customer Supports: 
                  <h4 className='text-white'>(629) 555-0129</h4>
                </li>
                <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                <li className='text-white'>info@kinbo.com</li>
              </ul>
                <div className="phone fw-bold  d-none d-lg-flex align-items-center">
                  <i class="fa-solid fa-phone-volume me-2"></i>
                  +1-202-555-0104
                </div>
            </div>
            <div className='col-lg-3 col-6 '>
              <h5>Top Category</h5>
              <ul>
                <li>Computer & Laptop</li>
                <li>SmartPhone</li>
                <li>Headphone</li>
                <li>Accessories</li>
                <li>Camera & Photo</li>
                <li>TV & Homes</li>
                <button className='shopBtn'>
                  Browse All Product <i class="fa-solid fa-arrow-right"></i></button>
              </ul>
            </div>
            <div className='col-lg-3 col-6 '>
              <h5>Quick links</h5>
              <ul>
                <li>Shop Product</li>
                <li>Shoping Cart</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Track Order</li>
                <li>Customer Help</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className='col-lg-3 col-6 col-last'>
              <h5>Popular Tag</h5>
              <ul>
                <li>Game</li>
                <li>iPhone</li>
                <li>TV</li>
                <li>Asus Laptops</li>
                <li>Macbook</li>
                <li>Graphics Card</li>
                <li>Power Bank</li>
                <li>Smart TV</li>
                <li>Speaker</li>
                <li>Tablet</li>
                <li>Microwave</li>
                <li>Samsung</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className='text-center'>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
      </footer>
    </>
  )
}
