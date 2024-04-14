import './App.css'
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [pastData, newData] = useState([])
  const [pastSelectData, newSelectData] = useState('all')
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data
        newData(data)
      }
      catch (error) {
        console.log(error)
      }
    };
    fetchData()
  },[])

  const filterData = pastSelectData === 'all' ? pastData : pastData.filter(eachItem => eachItem.category === pastSelectData)

  const handleClick = (category) => {
    newSelectData(category)
    console.log(category)
  }
  return (
    <div className="main-bg-container">
      <div className='icons-name-container '>
        <div>
          <h3 className="heading-nav-bar">TANN TRIM</h3>
        </div>
        <div className='icons-content-nav-sections'>
          <FaSearch className='icons-image' />
          <CgProfile className='icons-image' />
          <CiBookmark className='icons-image' />
          <FaBagShopping className='icons-image' />
        </div>
      </div>
      <nav>
        <div>
          <ul className="unorder-list">
            <li className={`list-nav-items ${pastSelectData === "all" ? "selected" : ""}`} onClick={() => handleClick("all")}>All</li>
            <li className={`list-nav-items ${pastSelectData === "men's clothing" ? "selected" : ""}`} onClick={() => handleClick("men's clothing")}>Mens</li>
            <li className={`list-nav-items ${pastSelectData === "women's clothing" ? "selected" : ""}`} onClick={() => handleClick("women's clothing")}>Womens</li>
            <li className={`list-nav-items ${pastSelectData === "electronics" ? "selected" : ""}`} onClick={() => handleClick("electronics")}>Electronis</li>
            <li className={`list-nav-items ${pastSelectData === "jewelery" ? "selected" : ""}`} onClick={() => handleClick("jewelery")}>Jewelery</li>
          </ul>
        </div>
      </nav>
      <div>
        <div>
          {/* <ul className='unorder-list'>
            <li>
              <img src={image1} className="images-sizes" alt="image1" />
            </li>
            <li>
              <img src={image3} alt='imag3' className="images-sizes" />
            </li>
            <li>
              <img src={image4} alt='imag4' className="images-sizes" />
            </li>
            <li>
              <img src={image5} alt='imag5' className="images-sizes" />
            </li>
            <li>
              <img src={image2} className="images-sizes" alt='image2' />
            </li>
            <li>
              <img src={image6} alt='imag6' className="images-sizes" />
            </li>
          </ul> */}
        </div>
      </div>
      <div>
        <ul className='unorder-list-container-images-container'>
        {filterData.map((items) =>(
          <li key={items.id}>
               <div className='image-main-container'>
                 <div>
                  <img className='images-content-sizes' src={items.image} alt={items.id} />
                   <CiBookmark className='bookmark-icon'/>
                </div>
                <h6 className='image-title'>{items.title}</h6>
                 <div className='price-section-discount-container'>
                   <div>
                    <span className='discount-price'>{items.price}</span>
                   <span className='actual-price'>8999</span>
                    <span className='offer-involved'>(50% Off)</span>
                  </div>
                   <div>
                     <GiShoppingBag className='icon-shopping' />
                 </div>
                </div>
               </div>
            
             </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App;

// {pastData.map((items) => (
//   <li key={items.id}>
//     <div className='image-main-container'>
//       <div>
//         <img className='images-content-sizes' src={items.image} alt={items.id} />
//         <CiBookmark className='bookmark-icon'/>
//       </div>
//       <h6 className='image-title'>{items.title}</h6>
//       <div className='price-section-discount-container'>
//         <div>
//           <span className='discount-price'>{items.price}</span>
//           <span className='actual-price'>8999</span>
//           <span className='offer-involved'>(50% Off)</span>
//         </div>
//         <div>
//           <GiShoppingBag className='icon-shopping' />
//         </div>
//       </div>
//     </div>
  
//   </li>
// ))}