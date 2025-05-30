import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
const Cart = ({cart, setCart}) => {
            const incqty = (product) => {
            const exist = cart.find((x)=>{
                return x.id === product.id
            }) 
            setCart(cart.map((item) =>{
                return item.id === product.id ? {...exist, qty: exist.qty + 1} : item
            }))
        } 
            const dicqty = (product) => {
            const exist = cart.find((x)=>{
                return x.id === product.id
            }) 
            setCart(cart.map((item) =>{
                return item.id === product.id ? {...exist, qty: exist.qty - 1} : item
            }))
        } 
        // remove
            const removeItem = (product) => {
            const exist = cart.find((x) => {
                return x.id === product.id
            })  
            if(exist.qty > 0) {
                setCart(cart.filter((item) => {
                    return item.id !== product.id
                }))
            }
        }
        const Total = cart.reduce((price, item) => price + item.qty*item.price, 0 )
        const cartItemCount = Array.isArray(cart)
            ? cart.reduce((total, item) => total + (item.qty || 0), 0)
            : 0;
        return ( 
        <>
            <section className="cart  pb-5 pb-lg-0">
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
                            Shoping Card
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="container p-4">
                    <div className="row gap-5">
                <div className="cart-items col-lg-8">
                    <h3 className='pb-3 p-3'>Shopping Card : {cartItemCount}</h3> 
                    {
                        cart.length === 0  &&
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
                        cart.map((item) =>{
                            return(
                                <div className="cart-item" key={item.id}>
                                    <button className="rounded-5 removeBtn" onClick={()=> removeItem(item)}>
                                    <i class="fa-solid fa-xmark fs-5"></i>
                                    </button>
                                    <img src={item.image} alt={item.id} />
                                    <div className="cart-item-details">
                                        <h6>{item.title}</h6>
                                    </div>
                                        <div className='d-flex align-items-center gap-4'>
                                            <p>Price: 
                                                <span>$ {item.price}</span>
                                            </p>
                                            <div className="qty flex justify-content-center">
                                                <button onClick={() => incqty(item)} className='btn'>+</button>
                                                <input type='number' value={item.qty} />
                                                <button onClick={() => dicqty(item)} className='btn '>-</button>
                                            </div>
                                            <p>Total: 
                                                <span>$ 
                                                {item.price * item.qty}
                                                </span>
                                            </p>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-items-right col-lg-3">
                    <h3 className="pb-3 p-3">Card Totals</h3>
                    <ul>
                        <li>
                            <span>Sub-total </span>
                            <span>{cart.price}</span>
                        </li>
                        <li>
                            <span>Shipping </span>
                            <span>Free</span>
                        </li>
                        <li>
                            <span>Discount </span>
                            <span>{cart.discount}</span>
                            
                        </li>
                        <li>
                            <span>Tax</span>
                            <span>$50</span>
                        </li>
                    </ul>
                    <li>
                        <span>Total</span>
                        <span>$ {Total}</span>
                    </li>
                    <button className='shopBtn text-white w-100 my-3'>Proceed to Checkout <i className="fa-solid fa-arrow-right ms-2"></i></button>
                </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart