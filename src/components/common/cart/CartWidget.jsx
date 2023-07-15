import { CiUser } from 'react-icons/ci';
import { CiLogin } from 'react-icons/ci';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css'
import { Link } from 'react-router-dom';


const CartWidget = () => {
  return (
    <div className='Icons'>
      <ul className='ClassCartWidtget'>
        <CiUser/>
        <p> Usuarios </p>
        <CiLogin/>
        <p> Ingresar </p>
        <AiOutlineUsergroupAdd/>
        <Link 
          to='/formu' 
          className='ClassFormuCart'> Registrarse </Link>
        <AiOutlineShoppingCart/>
      </ul>
    </div>
  )
}

export default CartWidget;