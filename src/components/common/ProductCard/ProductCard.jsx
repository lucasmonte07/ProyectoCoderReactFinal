import { Link } from "react-router-dom"



const ProductCard = ({elemento}) => {
  return (
    <div>

        <section className='PruebaCart1'>
          
          <div className='ClassImg'>
            <img src={elemento.img} alt="" />
          </div>        
          <h3 className='ClassItem'> {elemento.title} </h3>
          <span className='ClassSpan'> {elemento.price} </span>
          <p className='Lorem'> Producto con stock  </p>
          
          <Link to={`/ItemDetail/${elemento.id}`}>      
            <div className='bay'>
              <button> CONSULTAR </button>
            </div>
          </Link>              
              
        </section>

    </div>
  )
}

export default ProductCard