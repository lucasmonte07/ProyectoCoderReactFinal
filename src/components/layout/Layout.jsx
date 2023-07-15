import { Outlet } from "react-router-dom"
import BarraNav from "../common/BarraNav/BarraNav"
import BarraNews from "../common/BarraNews/BarraNews"
import NavBar from "../pages/navbar/NavBar"
import Footer from "../pages/footer/Footer"
import FooterB from "../pages/FooterB/FooterB"
import Slider from "../common/Slider/Slider"
//import ImgCenter from "../common/imgCenter/ImgCenter"

const Layout = () => {
  return (
    <div>
        <BarraNews/>
        <NavBar/>
        <BarraNav/>
        <Outlet/>
        <Slider/>
        <Footer/>
        <FooterB/>
    </div>
  )
}

export default Layout;