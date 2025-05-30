import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route,Switch } from 'react-router-dom'
import Header from '../header/Header'
import Home from '../home/home/Home'
import HomeProducts from '../home/homeProduct/homeProducts'
import {Products} from '../data/data'
import Category from '../home/category/Category'
import Cart from '../cart/Cart'
import Wishlist from '../wishlist/Wishlist'
import NewCate from '../home/newCategory/NewCate'
import { Footer } from '../footer/Footer'
import Shop from '../shopPage/Shop'
import Contact from '../contact/Contact'
import User from '../user/User'
const Pages = () => {
    const [product, setProduct] = useState( Products || [])
    const [activeFilter, setActive] = useState("all")
    const [search , setSearch ] = useState("") 
    const [filteredProduct, setFilteredProduct] = useState(Products|| [])
    const [homeHided, setHomeHied] =useState(true)


    const [cart, setCart] = useState(() =>{
      const saveDataCart = localStorage.getItem('cart')
      return saveDataCart ? JSON.parse(saveDataCart) : []
    })
    const [wishlist, setWishlist] = useState(() => {
      const saveDataWishlist = localStorage.getItem('wishlist')
      return saveDataWishlist ? JSON.parse(saveDataWishlist) : []
    });

    useEffect (() => {
      localStorage.setItem('cart' , JSON.stringify(cart))
    }, [cart])
    useEffect (()=> {
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])

      const hideHome = () => {
        setHomeHied(false)
      }
      const showHome = () => {
        setHomeHied(true)
      }

      useEffect(() => {
        if(search.trim() === ""){
          setFilteredProduct(product)
        }
        else{
          const filtered = product.filter((item) => {
            const type = item.type || ''
            const title = item.title || ''
            return (
              title.toLowerCase().includes(search.toLowerCase()) || 
              type.toLowerCase().includes(search.toLowerCase())
            )
          })
          setFilteredProduct(filtered)
        }
      },[search, product])

  const filterProduct = (type) => {
    setActive(type);
    if (type === 'all') {
      const filtered = product.filter((item) => {
        const title = item.title || '';
        const itemType = item.type || '';
        return (
          title.toLowerCase().includes(search.toLowerCase()) ||
          itemType.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFilteredProduct(filtered);
    } else {
      const filtered = product.filter((item) => {
        const title = item.title || '';
        const itemType = item.type || '';
        return (
          itemType === type &&
          (title.toLowerCase().includes(search.toLowerCase()) ||
            itemType.toLowerCase().includes(search.toLowerCase()))
        );
      });
      setFilteredProduct(filtered);
    }
  };

    // add to cart function
    const checkedCart = (product) => {
      const exist = cart.find((item) => {
        return item.id === product.id
      })
      if(exist) {
        alert("This product is already in the cart")  
      }
      else {
        setCart([...cart, {...product, qty:1}])
        alert("Product added to cart successfully")
      }
    }    
    // add wishlist
    const checkWishlist = (product) => {
      const exist = wishlist.find((item) => {
        return item.id === product.id
      })
      if(exist) {
        alert("This product is already in the Wishlist")
      }
      else{
        setWishlist([...wishlist , {...product, qty:1}])
        alert('Product added to Wishlist successfully')
      }
    }
  // show
  const [showProduct, setShowProduct] = useState(false)
  // data
  const [dataDetail, setDerail] = useState([])
  
  const eyeShow = (product) => {
    setShowProduct(true)    
    const dataPage = ([{product}])
    const showData = dataPage[0]['product']    
    setDerail(showData)
  }

  const closeShow = () =>{
    setShowProduct(false)
  }
return (
  <>   
  {
      showProduct ? 
      <>
      <div className="boxShowProduct">
        <div className="container">
          <button onClick={()=> closeShow()}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="box d-flex gap-3">
            <img src={dataDetail.image} alt={dataDetail.id} />
            <div className='d-flex justify-content-center flex-column'>
              <div className='start mb-2'>
              <span>{dataDetail.start}</span>
              <span>{dataDetail.end}</span>
              </div>
              <div>
              <h5 className='mb-2'>{dataDetail.title}</h5>
              <div className='flex justify-content-between my-2'>
                <p className='text-primary fw-bold'>Price: ${dataDetail.price}</p>
                <p style={{display: dataDetail.discount !== "" ? 'block' : 'none' }}>discount: 
                  <span className='text-decoration-line-through text-secondary'> ${dataDetail.discount}</span>
                </p>
              </div>
              </div>
              <Link to='/cart'>
                <button className='shopBtn text-white' onClick={() => checkedCart(dataDetail)}>
                  Add To Cart
                </button>
              </Link>
            </div>
              <button className='of' style={{display: dataDetail.offPrice !=="" ? 'block' : 'none'}}>
                {dataDetail.offPrice}
              </button>
          </div>
        </div>
      </div>
      </>
      : null
    }
    <Header 
      search={search} 
      setSearch={setSearch} 
      hideHome={hideHome}
      showHome={showHome}
      cart={cart}
      wishlist={wishlist}
      setCart={setCart}
      setWishlist={setWishlist}
    />
    <main className="main-content">
    <Switch>
      <Route path='/' element={
        <>
        {homeHided && <Home />}
          <HomeProducts
              // product={product}
              product={filteredProduct}
              activeFilter={activeFilter}
              filterProduct={filterProduct}
              // filteredProduct={filteredProduct}
              checkedCart={checkedCart}
              checkWishlist={checkWishlist}
              eyeShow={eyeShow}
              homeHided={homeHided}
          />
          <Category  
            checkedCart={checkedCart}
            checkWishlist={checkWishlist}
            eyeShow={eyeShow}
            product={filteredProduct}
            filterProduct={filterProduct}
          />
          <NewCate/>
          <Footer/>
        </>
      } />
      <Route path="/Home" element={
        <>
          {homeHided && <Home />}
          <HomeProducts
            // product={product}
            product={filteredProduct}
            activeFilter={activeFilter}
            filterProduct={filterProduct}
            // filteredProduct={filteredProduct}
            checkedCart={checkedCart}
            checkWishlist={checkWishlist}
            eyeShow={eyeShow}
            homeHided={homeHided}
          />
          <Category  
            checkedCart={checkedCart}
            checkWishlist={checkWishlist}
            eyeShow={eyeShow}
            product={filteredProduct}
            filterProduct={filterProduct}
          />
          <NewCate/>
          <Footer/>
        </>
      } />
      <Route path="/Cart" element={
        <Cart
          cart={cart}
          setCart={setCart}
        />} />
      <Route path="/Wishlist" element={
        <Wishlist
        wishlist={wishlist}
        setWishlist={setWishlist}
        checkedCart={checkedCart}
        checkWishlist={checkWishlist}
        />} />
        <Route path='/Shop' element={
          <Shop
            checkedCart={checkedCart}
            checkWishlist={checkWishlist}
            eyeShow={eyeShow}
            product={filteredProduct}
            filterProduct={filterProduct}
          />
        }/>
        <Route path='/Contact' element={
          <Contact/>
        }
        />
        <Route path='/User' element={
        <User
            cart={cart}
            wishlist={wishlist}
            setCart={setCart}
            setWishlist={setWishlist}
        />
        }
        />
    </Switch>
    </main>
  </>
);
};

export default Pages