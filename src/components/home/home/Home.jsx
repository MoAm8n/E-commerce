import React, { useRef } from "react";
import './home.css'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
      let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
      <section className="home py-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7" style={{background: '#F2F4F5'}}>
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
              <div className="slider1 ">
                <div className="title">
                <span>-THE BEST PLACE TO PLAY</span>
                <h2 className="fw-bold my-2">Xbox Consoles</h2>
                <p className="text-secondary">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                <Link to={'/shop'}>
                <button className="shopBtn text-white rounded-0 mt-2">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
                </Link>
              </div>
                <div className="img">
                <img src="../images/home/home1.png" alt="" />
                <span className="selHome">$299</span>
                </div>
              </div>
              <div className="slider1">
                <div className="title">
                <span>-THE BEST PLACE TO PLAY</span>
                <h2 className="fw-bold my-2">Xbox Consoles</h2>
                <p className="text-secondary">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                <button className="shopBtn text-white rounded-0 mt-2">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
              </div>
                <div className="img">
                <img src="../images/home/home1.png" alt="" />
                <span className="selHome">$350</span>
                </div>
              </div>
              <div className="slider1">
                <div className="title">
                <span>-THE BEST PLACE TO PLAY</span>
                <h2 className="fw-bold my-2">Xbox Consoles</h2>
                <p className="text-secondary">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                <button className="shopBtn text-white rounded-0 mt-2">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
              </div>
                <div className="img">
                <img src="../images/home/home1.png" alt="" />
                <span className="selHome">$250</span>
                </div>
              </div>
            </Slider>
            </div>
            <div className="col-md-5 col-12 sideHome">
              <div className="div1">
                <div className="title">
                  <span>Summer Sales</span>
                  <h3 className="my-2">New Google Pixel 6 Pro</h3>
                  <Link to={'/Shop'}>
                  <button className="shopBtn text-white rounded-0 mt-2">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
                  </Link>
                </div>
                <div className="off">
                  <span>29% OFF</span>
                  <img src="../images/home/sideHome1.png" alt="" />
                </div>
              </div>
              <div className="div2 flex gap-lg-5">
                <div className="off">
                  <img src="../images/home/sideHome2.png" alt="" />
                </div>
                <div className="title">
                  <h3 className="mb-2">Xiaomi FlipBuds Pro</h3>
                  <span>$299 USD</span>
                  <Link to={'/Shop'}>
                    <button className="shopBtn text-white rounded-0 mt-2">SHOP NOW <i class="fa-solid fa-arrow-right"></i></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-6 col-md-3 lastHome">
              <i class="fa-solid fa-box fs-3"></i>
              <div className="tit">
                <h4>Fasted Delivery</h4>
                <p>Delivery in 24/H</p>
              </div>
            </div>
            <div className="col-6 col-md-3 lastHome">
              <i class="fa-solid fa-trophy fs-3"></i>
              <div className="tit">
                <h4>24 Hours Return</h4>
                <p>100% money-back</p>
              </div>
            </div>
            <div className="col-6 col-md-3 lastHome">
              <i class="fa-solid fa-money-check fs-3"></i>
              <div className="tit">
                <h4>Secure Payment</h4>
                <p>Your money is safe</p>
              </div>
            </div>
            <div className="col-6 col-md-3 lastHome">
              <i class="fa-solid fa-headphones fs-3"></i>
              <div className="tit">
                <h4>Support 24/7</h4>
                <p>Live contact/message</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home