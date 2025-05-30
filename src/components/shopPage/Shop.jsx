import { Link } from "react-router-dom"
import { shopPage } from '../data/data'
import './shop.css'
import { useEffect, useState } from "react"
const Shop = ({checkWishlist,checkedCart,eyeShow}) => {
  const [searchAll, setSearchAll] = useState("")
  const [filterAll , setFilterAll] = useState(shopPage || [])

  useEffect(() => {
    const filtered = shopPage.filter((item) => {
      const title = item.title || ''
      const type = item.type || ''
      return(
        title.toLowerCase().includes(searchAll.toLowerCase()) ||
        type.toLowerCase().includes(searchAll.toLowerCase())
      )
    })
  setFilterAll(filtered)
  },[searchAll])
  
  return (
    <>
    <section className="shop  pb-5 pb-lg-0">
      <div className="title-location cart-header p-2 ps-4">
        <ul className='flex justify-content-start gap-3 p-3'>
          <li>
              <Link to='/Home'>
              <i className="fa-solid fa-house me-2"></i>
              Home
              </Link>
          </li>
          <li>
              <Link className='text-primary'>
              <i className="fa-solid fa-arrow-right me-2"></i>
              Shop
              </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row py-3">
          <div className="col-2 d-none d-lg-block">
            <h3>CATEGORY</h3>
            <ul className="my-3">
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1"/>
                  <label class="form-check-label" for="radioDefault1">
                    Electronics Devices
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2"/>
                  <label class="form-check-label" for="radioDefault2">
                    Computer & Laptop
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault3"/>
                  <label class="form-check-label" for="radioDefault2">
                    SmartPhone
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault4"/>
                  <label class="form-check-label" for="radioDefault2">
                    Headphone
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault5"/>
                  <label class="form-check-label" for="radioDefault2">
                    Mobile Accessories
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault6"/>
                  <label class="form-check-label" for="radioDefault2">
                    Gaming Console
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault7"/>
                  <label class="form-check-label" for="radioDefault2">
                    Camera & Photo
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check my-2">
                  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault8"/>
                  <label class="form-check-label" for="radioDefault2">
                    TV & Homes Appliances
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-10">
            <form action="" className="inputSearch">
                <input type="text" placeholder='Search for anything...' value={searchAll} onChange={(e) => setSearchAll(e.target.value)}/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>            
            <div className="bodyProduct my-4">
            {
              filterAll.map((item) => {
                return(
                  <div className="AllBox">
                    <img src={item.image} alt="" />
                    <div className="start my-2 d-flex">
                      <span>{item.start}</span>
                      <span>{item.end}</span>
                    </div>
                    <h6>{item.title}</h6>
                    <p className="price my-2">
                      <span className='text-secondary text-decoration-line-through me-2' style={{
                        display: item.discount !== "" ? "inline" : "none"}}>$ {item.discount}</span>
                      $ {item.price} 
                    </p> 
                    <button className="btnHot" style={{
                      display: item.offPrice !=="" ? "block" : "none", 
                      background: item.offPrice === "Hot" ?  "#EE5858" : "#EFD33D", 
                      color: item.offPrice === "Hot" ? "#fff" : "#000" }}>
                    {item.offPrice}
                    </button>
                    <div className='product-btn'>
                      <Link  onClick={() => checkWishlist(item)}>
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
                )
              })
            }
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <Link class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li class="page-item"><Link to='/Shop' class="page-link">1</Link></li>
                <li class="page-item"><Link class="page-link">2</Link></li>
                <li class="page-item"><Link class="page-link">3</Link></li>
                <li class="page-item">
                  <Link class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Shop