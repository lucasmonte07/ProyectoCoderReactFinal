import './QuienesSomos.css'
const QuienesSomos = () => {
  return (
    <div className="ClassContainerGeneralQuienesSomos">
        <div className="ClassQuienesSomos">
          <h2> ¿ Quiénes somos ? </h2>
        </div>

      <div className='ClassSeccionP'>
        <p>
          Somos una empresa argentina, siempre acompañando la fabricación en el país.
        </p>

        <p className='p2'>
          Apostamos por la industria nacional y el crecimiento dentro de esta región.
        </p>
      </div>

        <div className="ImgQuienesSomos">
          <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687740508/1_QUIENES_SOMOS-02_szf7vz.png" alt="" />
        </div>

        <div className='ImgKELYX'>
          <img src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1687740877/kelyx_nb0fu0.jpg" alt="" />
        </div>

        <div className='UltPrrf'>
          <p>
          Los productos KELYX son fabricados en Argentina bajo estándares de calidad internacionales y procesos de mejora continua.
          </p>
          <p className='Up2'>
              La ingeniería tecnológica utilizada en la fabricación de los productos y la implementación de procedimientos de fabricación son comparables con las industrias informáticas de avanzada. Cumplimos con los requerimientos de ensamble certificados por las marcas, con lo cual garantizamos que todos los procesos involucrados en la producción y la entrega de equipos están en los estándares internacionales. Aquí es donde conjugan líneas de producción de avanzada, exhaustivos procedimientos de prueba, trazabilidad de componentes, y estrictos controles de calidad para dar vida a una de las marcas nacionales que enorgullece la industria argentina.
          </p>
        </div>
    </div>
  )
}

export default QuienesSomos;