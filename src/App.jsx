import './App.css'
import Layout from './components/layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { menuRoutes } from './components/routes/menuRoutes'


function App() {

  return ( 
  <>
      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>}>
            { menuRoutes.map(({ id, path, Element  }) => (
                <Route key={ id } path={ path } element={ <Element/> } />
              ))
            }
          </Route>       

        </Routes> 
      </BrowserRouter> 
  </> 
  )
}

export default App


{/*<BarraNews/>
<ItemListContainer greeting={ 'Bienvenido' } />
        <NavBar/>
        <BarraNav/>
        <ImgCenter/>/


            <Route path='/' element={ <ItemListContainer/> } /> 
            <Route path='/quienesSomos' element={ <QuienesSomos/> } />
            <Route path='/detalle' element={<ItemDetail/>} />   
            <Route path='/GarantiaRma' element={<GarantiaRma/>} />
            <Route path='/formu' element={<Form/>} />
            <Route path='/productos' element={<Productos/>} />

*/}
