import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Category } from '../../data/data';
import { Category2 } from '../../data/data';
import { CategoryLeft } from '../../data/data';
import './category.css'
const category = ({checkWishlist, checkedCart, eyeShow}) => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
        var settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
    <>
        <section className="category d-none d-lg-flex">
            <div className="container">
                <div className="justify-content-center">
                    <h2 className='text-center fw-bold'>Shop with Categorys</h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {Category.map((item) =>{
                        return (
                            <div className="category-box" key={item.id}>
                                <a href={item.location} target="_blank" rel=" noopener noreferrer">
                                <img src={item.image} alt={item.id} />
                                <h5 className='my-4'>{item.title}</h5>
                                </a>
                            </div>
                            )
                        })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>  
        <div className="mobile d-lg-none">
                    <section className="category">
            <div className="container">
                <div className="justify-content-center">
                    <h2 className='text-center fw-bold'>Shop with Categorys</h2>
                    <div className="slider-container">
                        <Slider {...settings1}>
                            {Category.map((item) =>{
                        return (
                            <div className="category-box" key={item.id}>
                                <a href={item.location} target="_blank" rel=" noopener noreferrer">
                                <img src={item.image} alt={item.id} />
                                <h5 className='my-4'>{item.title}</h5>
                                </a>
                            </div>
                            )
                        })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section> 
        </div>
        <section className="homeProducts">
            <div className="container">
                <div className="row">
                <div className="category-left col-lg-3 p-0 m-0">
                    <div className="slider-container">
                        <Slider {...settings1}>
                            {CategoryLeft.map((item) => {
                                return(
                                    <div className="box-left p-3 " key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="start my-2 d-flex">
                                        <span>{item.start}</span>
                                        <span>{item.end}</span>
                                    </div>
                                    <h6>{item.title}</h6>
                                    <p className='text-primary my-3 fw-bold'>
                                        <span className='text-secondary text-decoration-line-through me-2' 
                                        style={{display: item.discount !== "" ? "inline" : "none"}}>
                                        $ {item.discount}
                                        </span>
                                        $ {item.price}
                                    </p>
                                    <p>{item.p}</p>
                                    <button className='discount'
                                        style={{display: item.discount !=="" ? "block" : "none",
                                        background: item.discount === "32% OFF" ?  "#EFD33D" : "#EE5858",
                                        color: item.discount === "32% OFF" ? "#000" : "#fff" }}>
                                        {item.discount}
                                    </button>
                                    <button className='offPrice'
                                        style={{display: item.offPrice !=="" ? "block" : "none",
                                        background: item.offPrice === "Hot" ?  "#EE5858" : "#EFD33D",
                                        color: item.offPrice === "Hot" ? "#fff" : "#000" }}>
                                        {item.offPrice}
                                    </button>
                                    <div className="boxBtn-left py-3 flex justify-content-around mt-3">
                                        <Link onClick={() => checkWishlist(item)}>
                                        <button><i class="fa-regular fa-heart"></i></button>
                                        </Link>
                                        <Link onClick={() => checkedCart(item)}>
                                        <button className='btn-cart'>
                                            <i class="fa-solid fa-cart-shopping me-2"></i>
                                            ADD TO CART
                                        </button>
                                        </Link>
                                        <Link onClick={() => eyeShow(item)}>
                                        <button><i class="fa-regular fa-eye"></i></button>
                                        </Link>
                                    </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>        
                <div className="homeProducts-content col-lg-9 ">
                    <Link to={'/Shop'}>
                    <button className="shopBtn text-white rounded-0 w-100 text-end">Browse All Product <i class="fa-solid fa-arrow-right"></i></button>
                    </Link>
                        <div className="product-list py-3">
                        {Category2.map((item) => (
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
                                    background: item.offPrice === "HOT" ?  "#EE5858" : "#EFD33D",
                                    color: item.offPrice === "HOT" ? "#fff" : "#000" }}>
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
export default category