import './App.css'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";

const data = [
  {
    id: 1,
    image: 'https://s3-alpha-sig.figma.com/img/078b/e9ad/379fa9c60606ae8d9c7608e86c3732e9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0rs~tV3cUxxXxmodGTjjCqMSBuj2ipbrseQOXtXd99OGMEtRkY70j900HYHXSTnLiynqV40etS4NHu~7GvXTcY7~7Mwg4WJmTEF16t9Ri1xNoxr4LQzONpYIiHfc5XDh2v025F0bPLmHSAIkqgx6TCkrcPPa~07C~sjYIHeNMCiAVY1uhFw9UL-2W1wo6mEYWPj~NTDSCvO33qT6G2X5E5eMDF2H2D6Dd0oYDGHbxqfnBIUonQP64-uX9kzyIVH4G8JfWdRUUtWRJgQWoTFAkuKb94nTepfkE0FQwpP0AiVVOh0sotSt-t4nuDHs28QqoEIquLhQ9WWmV5zdaLnWg__',
    title: 'The Metro Movers Black',
    price: '4899'
  },
  {
    id: 2,
    image: 'https://s3-alpha-sig.figma.com/img/d932/0c15/5e9f74c6ef8dca9b868b05923aa2ac5c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMLZjmEIJsUiSHDivqIHK06yoCnWASsKZfOhFVignZAT4dBLymc1K-DAbDMemT~wDMkEcE0vJ2C1CsYxU9BEmdkaAH70UkSpWBV14vkyaCxYXZ0Az8Yw5fUwR~mQnDppBM-BUGukPQiu2ecA9l7kJbEzlpMF0SicbRgzxeTY4t9XbdlFnzrzver-ZXdZXU4AACkbWXbiMcn0FID1cYnQrRr-5pmn04P2n9MDHoo8eNxkkZb-05aXcWIrC~JMLNSovi0othI8vdzxTjeAvD9sq3T79gEehvcNAGlYGDL8FNMlFlDYXer8hH0CVgn8k7NUGjQd~lcf9SZ6wJV8aBI4aQ__',
    title: 'The Metro Movers Black',
    price: '4899'
  },
  {
    id: 3,
    image: 'https://s3-alpha-sig.figma.com/img/18fc/3848/88fd50c336de301ae1c2be7d0c3c7449?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XspNR~-oiEzdqiwOgp57khioKldkjC3aD01Rb9-rkqHgghLCGPXVYk7PQlMEhb7WU1N7LE4HY7c~2nY6qvn9-~TfiYjjWUr8YeU1e~MW~-nM7zR1JUUwNJF18J0TbwnjyNyZ9t2HkC7Dt7iwpFZqFaNuOd1UjK7NwheUrX2tssFS1xMX5CVznPUoPQnfsPHDeeHyKgmA5DBZh0OqScPffevPPRUlLZvP7GxO2~n2sroZl40z~V49TUS63mmU2-8VacSxvEHfaktrlCpMX4lFGor0W2w-J7Qz2YilR6jzV9PfElTChTB0m~QULPBNpOv6rkUsscdHvuJOEiyqO6N0ng__',
    title: 'The Metro Movers Black',
    price: '4899'
  }, {
    id: 4,
    image: 'https://s3-alpha-sig.figma.com/img/4d5a/ffa4/55de34c78b592eff051c5bc15ce83331?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C98s1AanweRE4b1roSIQ9FVHEREP-kP8t4v~Ku8aQ9NSQS~z3VsnboDku2gXRZQbX3OMNWYb~8qV6~4VXJxIxXfP5C1l02IuMzi0fEhAmkaZstYO9DvWMna3rc6S8j6LU-pTZZkMBsw7HQHvEuLgUwToSbNDMEKA-OsYZch3HJxhxHqdCC9~nv8FD24a6eETCeVXGYiuZRvrPgBWvpkv2Y-Co-8GOClhjl7bH1QFRQn8zYAdawYZcCMwvFT8xn-Ut9~VGvSv28NjAOJfAnTz2O9cG8yFv9v15DPDPuzTVKB18nq08MnSE0uENOCXjAmCV-VJvAfe6dNm33Ui-EA-Wg__',
    title: 'The Metro Movers Black',
    price: '4899'
  },
  {
    id: 5,
    image: 'https://s3-alpha-sig.figma.com/img/078b/e9ad/379fa9c60606ae8d9c7608e86c3732e9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0rs~tV3cUxxXxmodGTjjCqMSBuj2ipbrseQOXtXd99OGMEtRkY70j900HYHXSTnLiynqV40etS4NHu~7GvXTcY7~7Mwg4WJmTEF16t9Ri1xNoxr4LQzONpYIiHfc5XDh2v025F0bPLmHSAIkqgx6TCkrcPPa~07C~sjYIHeNMCiAVY1uhFw9UL-2W1wo6mEYWPj~NTDSCvO33qT6G2X5E5eMDF2H2D6Dd0oYDGHbxqfnBIUonQP64-uX9kzyIVH4G8JfWdRUUtWRJgQWoTFAkuKb94nTepfkE0FQwpP0AiVVOh0sotSt-t4nuDHs28QqoEIquLhQ9WWmV5zdaLnWg__',
    title: 'The Metro Movers Black',
    price: '4899'
  },
  {
    id: 6,
    image: 'https://s3-alpha-sig.figma.com/img/d932/0c15/5e9f74c6ef8dca9b868b05923aa2ac5c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMLZjmEIJsUiSHDivqIHK06yoCnWASsKZfOhFVignZAT4dBLymc1K-DAbDMemT~wDMkEcE0vJ2C1CsYxU9BEmdkaAH70UkSpWBV14vkyaCxYXZ0Az8Yw5fUwR~mQnDppBM-BUGukPQiu2ecA9l7kJbEzlpMF0SicbRgzxeTY4t9XbdlFnzrzver-ZXdZXU4AACkbWXbiMcn0FID1cYnQrRr-5pmn04P2n9MDHoo8eNxkkZb-05aXcWIrC~JMLNSovi0othI8vdzxTjeAvD9sq3T79gEehvcNAGlYGDL8FNMlFlDYXer8hH0CVgn8k7NUGjQd~lcf9SZ6wJV8aBI4aQ__',
    title: 'The Metro Movers Black',
    price: '4899'
  },
  {
    id: 7,
    image: 'https://s3-alpha-sig.figma.com/img/18fc/3848/88fd50c336de301ae1c2be7d0c3c7449?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XspNR~-oiEzdqiwOgp57khioKldkjC3aD01Rb9-rkqHgghLCGPXVYk7PQlMEhb7WU1N7LE4HY7c~2nY6qvn9-~TfiYjjWUr8YeU1e~MW~-nM7zR1JUUwNJF18J0TbwnjyNyZ9t2HkC7Dt7iwpFZqFaNuOd1UjK7NwheUrX2tssFS1xMX5CVznPUoPQnfsPHDeeHyKgmA5DBZh0OqScPffevPPRUlLZvP7GxO2~n2sroZl40z~V49TUS63mmU2-8VacSxvEHfaktrlCpMX4lFGor0W2w-J7Qz2YilR6jzV9PfElTChTB0m~QULPBNpOv6rkUsscdHvuJOEiyqO6N0ng__',
    title: 'The Metro Movers Black',
    price: '4899'
  }, {
    id: 8,
    image: 'https://s3-alpha-sig.figma.com/img/4d5a/ffa4/55de34c78b592eff051c5bc15ce83331?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C98s1AanweRE4b1roSIQ9FVHEREP-kP8t4v~Ku8aQ9NSQS~z3VsnboDku2gXRZQbX3OMNWYb~8qV6~4VXJxIxXfP5C1l02IuMzi0fEhAmkaZstYO9DvWMna3rc6S8j6LU-pTZZkMBsw7HQHvEuLgUwToSbNDMEKA-OsYZch3HJxhxHqdCC9~nv8FD24a6eETCeVXGYiuZRvrPgBWvpkv2Y-Co-8GOClhjl7bH1QFRQn8zYAdawYZcCMwvFT8xn-Ut9~VGvSv28NjAOJfAnTz2O9cG8yFv9v15DPDPuzTVKB18nq08MnSE0uENOCXjAmCV-VJvAfe6dNm33Ui-EA-Wg__',
    title: 'The Metro Movers Black',
    price: '4899'
  }
]

const App = () => {
  return (
    <div className="main-bg-container">
      <div className='icons-name-container '>
        <div>
          <h3 className="heading-nav-bar">TANN TRIM</h3>
        </div>
        <div>
          <FaSearch className='icons-image' />
          <CgProfile className='icons-image' />
          <CiBookmark className='icons-image' />
          <FaBagShopping className='icons-image' />
        </div>
      </div>
      <nav>
        <div>
          <ul className="unorder-list">
            <li className="list-nav-items">Bags</li>
            <li className="list-nav-items">Travel</li>
            <li className="list-nav-items">Accesories</li>
            <li className="list-nav-items">Gifting</li>
            <li className="list-nav-items">Jewelery</li>
          </ul>
        </div>
      </nav>
      <div>
        <div>
          <ul className='unorder-list'>
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
          </ul>
        </div>
      </div>
      <div>
        <ul className='unorder-list-container-images-container'>
          {data.map((items) => (
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