import React from 'react'
import './newcate.css'
import {NewFlashSale} from '../../data/data'
import {NewBest} from '../../data/data'
import {NewRated} from '../../data/data'
import {NewArrival} from '../../data/data'
import { Link } from 'react-router-dom'
const NewCate = () => {
    return (
        <>
            <section className="newCate py-2 py-lg-0">
                <div className="container">
                    <div className='flex flex-column flex-lg-row px-4'>
                        <div className="title">
                            <button className='btn bg-primary text-white rounded-0 mb-3'>SAVE UP TO $200.00</button>
                            <h1>Macbook Pro</h1>
                            <p className='my-3'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
                            <Link to={'/Shop'}>
                            <button className='shopBtn text-white'>Shop Now <i class="fa-solid fa-arrow-right ms-2"></i></button>
                            </Link>
                        </div>
                        <div className='position-relative'> 
                            <img src={`${process.env.PUBLIC_URL}/images/new.png`} alt="" />
                            <span className='disImage'>$1999</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newCategory">
                <div className="container">
                    <div className='newCategoryBox gap-2 py-3'>
                        <ul>
                            <h5 className='py-3'>FLASH SALE TODAY</h5>
                            {NewFlashSale.map((item) =>{
                                return(
                                    <div className='d-flex box'>
                                    <li><img src={item.image} alt=""/></li>
                                    <div className='d-flex flex-column tit'>
                                        <li>{item.title}</li>
                                        <li className='text-primary'>$ {item.price}</li>
                                    </div>
                                    </div>
                                )
                            })}
                        </ul>
                        <ul>
                            <h5 className='py-3'>BEST SELLERS</h5>
                            {NewBest.map((item) =>{
                                return(
                                    <div className='d-flex box'>
                                    <li><img src={item.image} alt=""/></li>
                                    <div className='d-flex flex-column tit'>
                                        <li>{item.title}</li>
                                        <li className='text-primary'>$ {item.price}</li>
                                    </div>
                                    </div>
                                )
                            })}
                        </ul>
                        <ul>
                            <h5 className='py-3'>TOP RATED</h5>
                            {NewRated.map((item) =>{
                                return(
                                    <div className='d-flex box'>
                                    <li><img src={item.image} alt=""/></li>
                                    <div className='d-flex flex-column tit'>
                                        <li>{item.title}</li>
                                        <li className='text-primary'>$ {item.price}</li>
                                    </div>
                                    </div>
                                )
                            })}
                        </ul>
                        <ul>
                            <h5 className='py-3'>NEW ARRIVAL</h5>
                            {NewArrival.map((item) =>{
                                return(
                                    <div className='d-flex box'>
                                    <li><img src={item.image} alt=""/></li>
                                    <div className='d-flex flex-column tit'>
                                        <li>{item.title}</li>
                                        <li className='text-primary'>$ {item.price}</li>
                                    </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewCate