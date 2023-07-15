import CartWidget from "../../common/cart/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi';


const NavBar = () => {
  return (
    <div className="ContainerNavBar">
        <Link to='/'>
            <div className="ClassLogo">
                  <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1686516699/logo-INVID_junio22_zkx8wp.png" alt="" />   
              </div>
        </Link>
            
          <div className="Container">
            <input type="text" placeholder=" que producto estás buscando ?  " />
            <div className="ClassBtn">
              <i> <BiSearchAlt/> </i>
            </div>
          </div>
        <CartWidget />
    </div>
  )
};
 
export default NavBar;
