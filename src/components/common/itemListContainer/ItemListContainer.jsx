  import './ItemListContainer.css'
import './BarInformacion.css'
import { FiDollarSign } from 'react-icons/fi';
import { BsCreditCard2Back } from 'react-icons/bs';
import { BsShieldCheck } from 'react-icons/bs';
import { TfiPackage } from 'react-icons/tfi';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../../../../products.json'
import { ScaleLoader } from 'react-spinners';


const ItemListContainer = () => {

 // el useParams nos trae un objeto 
  const [items, setItems] = useState([]);
 // const {categoryId} = useParams()

  const  { categoryName } = useParams();

  useEffect( () => {
    
    let productosFiltrados = products.filter (
      (product) => product.category === categoryName
    );  
    
    const tarea = new Promise((resolve) => {
      setTimeout(() =>{
        resolve(categoryName ? productosFiltrados : products);
      },2000);
    });
    
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
    
  },[categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScaleLoader color="steelblue" width={40} height={111} />
      </div>
    );
  }

  return  (
    
    <div className='ClassGeneral'>

      <div className="ImgCenter">
          <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1686761750/0000005716683N5105I-H-Web-Banner-Giga-mother-con-SODIMM_ta7g5m.jpg" alt="" />
      </div>

      <div className="container-informacion">

        <div className="box1">
            <a className="gg-credit-card"> <BsCreditCard2Back/> </a>
            <div className="CreditCard"> Tarjeta de credito </div>
            <div className="PromocionesBancarias"> Ver promociones bancarias  </div>
        </div>

        <div className="box2">
            <a className="gg-shield"> <BsShieldCheck/> </a>
            <div className="ComprasProtegidas"> Compras Protegidas </div>
            <div className="Informacion"> Ver información  </div>
        </div>

        <div className="box3">
            <a className="gg-box"> <TfiPackage/> </a>
            <div className="enviosDomicilio"> Envíos a domicilio </div>
            <div className="calcularEnvios"> Calcular Envíos </div>
        </div>

        <div className="box4">
            <a className="gg-dollar"> <FiDollarSign/> </a>
            <div className="comprasEfectivo"> Compras en efectivo </div>
            <div className="condiciones"> Ver condiciones </div>
        </div>
    </div>

      <div className='ClassSuperOfertas'>
        <h2> Super Ofertas </h2>
      </div>

    {/* primera sección de cartas antes del primer baner  */}
   
      <div className='PadreContainer'>

        <div className='ClassContainer'>
          
           
          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443468/000000000041517589568h390-gallery-rose-1-1_400x400_d3vvmt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> auricular c/mic logitech h390 </h3>
            <span className='ClassSpan'> $10.500 </span>
                  
            <p className='Lorem'> Producto con stock  </p>

            <Link to='/detalle'>      
              <div className='bay'>
                <button> CONSULTAR </button>
              </div>
            </Link>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgNote' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443489/0000000000415428733910415428_400x400_sqyumt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> Notebook lenovo IP 1 15ADA7 </h3>
            <span className='ClassSpan'> $611.000 </span>
                  
            <p className='Lorem'> Producto con stock   </p>
                  
            <div className='bay'>
              <button> CONSULTAR </button>
            </div>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgJBL' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443451/000000000041069845060410698--1-_400x400_1_fgaoyv.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> PARLANTE JBL CHARGE 5 </h3>
            <span className='ClassSpan'> $79.999 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
            <div className='bay'>
              <button> CONSULTAR </button>
            </div>              
                
          </section>

        </div>

      </div>

      <div className='ClassBanerCentral'>
          <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1686516727/envioBannerCentral_flf37x.jpg" alt="" />
      </div>

      <div className='ClassDestacadosNuevosIngresos'>
        <h2> Destacados / Nuevos Ingresos  </h2>
      </div>
    
    {/* 2da sección de cartas despues del primer baner  */}
    
      <div className='PadreContainer'>

        <div className='ClassContainer'>
          
          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1685556082/iphone2_yl68eb.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> Iphone11 </h3>
            <span className='ClassSpan'> $388.999 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
           <Link to='/detalle'>       
              <div className='bay'>
                <button> COMPRAR </button>
              </div>              
            </Link>
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443468/000000000041517589568h390-gallery-rose-1-1_400x400_d3vvmt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> auricular c/mic logitech h390 </h3>
            <span className='ClassSpan'> $10.500 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgNote' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443489/0000000000415428733910415428_400x400_sqyumt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> Notebook lenovo IP 1 15ADA7 </h3>
            <span className='ClassSpan'> $611.000 </span>
                  
            <p className='Lorem'> Producto con stock   </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgJBL' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443451/000000000041069845060410698--1-_400x400_1_fgaoyv.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> PARLANTE JBL CHARGE 5 </h3>
            <span className='ClassSpan'> $79.999 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

        </div>

      </div>  

      {/* tercera sección de cartas antes del ultimo baner  */}

      <div className='PadreContainer'>

        <div className='ClassContainer'>
          
          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1685556082/iphone2_yl68eb.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> Iphone11 </h3>
            <span className='ClassSpan'> $388.999 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
           <Link to='/detalle'>       
              <div className='bay'>
                <button> COMPRAR </button>
              </div>              
            </Link>
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443468/000000000041517589568h390-gallery-rose-1-1_400x400_d3vvmt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> auricular c/mic logitech h390 </h3>
            <span className='ClassSpan'> $10.500 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgNote' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443489/0000000000415428733910415428_400x400_sqyumt.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> Notebook lenovo IP 1 15ADA7 </h3>
            <span className='ClassSpan'> $611.000 </span>
                  
            <p className='Lorem'> Producto con stock   </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

          <section className='PruebaCart1'>
          
            <div className='ClassImg'>
              <img className='ImgJBL' src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687443451/000000000041069845060410698--1-_400x400_1_fgaoyv.png" alt="" />
            </div>        
                
            <h3 className='ClassItem'> PARLANTE JBL CHARGE 5 </h3>
            <span className='ClassSpan'> $79.999 </span>
                  
            <p className='Lorem'> Producto con stock  </p>
                  
            <div className='bay'>
              <button> COMPRAR </button>
            </div>              
                
          </section>

        </div>

      </div>   

      <div className='ClassBanerCentral'>
          <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1686516715/BANNER_JBL_10-05_dnvniw.png" alt="" />
      </div> 

    </div>

  )

}

export default ItemListContainer;