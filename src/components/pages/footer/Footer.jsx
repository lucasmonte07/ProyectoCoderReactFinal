import './Footer.css'
import { FaRegPaperPlane } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='ContainerGeneralFooter1'>
        
        <div className='ContainerA'>
            <h2 >
               EMPRESA
            </h2>

            <p> QUIENES SOMOS </p>

            <p> MARCAS ASOCIADAS  </p>

            <p> RRHH </p>

            <p> CONTACO   </p>
        </div>

        <div className='ContainerB'>

          <h2 >
                LEGAL
          </h2>

          <p> CONDICIONES DE GARANTÍA Y RMA  </p>

          <p> DOCUMENTOS LEGALES  </p>

        </div>
          
        <div className='ContainerC'>

          <h2 >
                AYUDA
          </h2>

            <p> CÓMO ABRIR UNA CUENTA  </p>

            <p> CÓMO REALIZAR UN PEDIDO </p>

            <p> RRHH </p>

           <p> BOTÓN DE ARREPENTIMIENTO  </p>

        </div>

        <div className='ContainerD'>

          <h2> SEGUINOS </h2>

          <p> <AiFillFacebook/> Facebook </p>

          <p> <AiFillInstagram /> Instagram </p>

          <p> <ImYoutube/> Youtube </p>

          <i> <FaRegPaperPlane/> Newsletter  </i>

        </div>

    </div>
  )
}

export default Footer;