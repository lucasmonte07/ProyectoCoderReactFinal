import { FaRegPaperPlane } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { ImYoutube } from 'react-icons/im';
import './BarraNews.css'


const BarraNews = () => {
  return (
    <div className='ContainerNews'>
      
        <p className='BarraNews'>
            Subscribite a nuestro News
            <FaRegPaperPlane/> 
        </p>
        <p className='ClassSeguinos'>
          seguinos en
          <AiFillFacebook/> 
          <AiFillInstagram/>
          <BsLinkedin/>
          <ImYoutube/>
        </p>
    </div>
  )
}

export default BarraNews;