
import { Link } from 'react-router-dom';
import './BarraNav.css'
const BarraNav = () => {
  return (
    <div className="ContainerBarraNav">
    
        <nav>
            <ul>
              
                <Link to='/productos' className='prueba'> Productos </Link>
                <Link className='prueba'> Empresas </Link>
                <Link to='/GarantiaRma' className='prueba'> Grantía Rma </Link>
                <Link to='/canalesPagos' className='prueba'> Canales de Pago </Link>
                <Link to='/formu' className='prueba'> Quiero ser cliente </Link>
                <Link to='/QuienesSomos' className='prueba'> Quienes somos  </Link> 

            </ul>
            <div>
          <img src="" alt="" />
        </div>
        </nav> 
        
    </div>
  )
}

export default BarraNav;