import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './ItemDetail.css';

const ItemDetail = () => {
  return (
    <div>
      <div className="container-title">Smartphones </div>
      <main>

          <div className="container-img">
            <img
              src="https://res.cloudinary.com/dhmyrfucq/image/upload/v1685556082/iphone2_yl68eb.png"
              alt="imagen-producto"
            />
          </div>

          <div className="container-info-product">
            <div className="container-price">
              <span>$488.000</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>

            <div className="container-details-product">

              <div className="form-group">
                <label >Color</label>
                <select name="colour" id="colour">
                  <option disabled selected value="">
                    Escoge una opción
                  </option>
                  <option value="rojo">Rojo</option>
                  <option value="blanco">Blanco</option>
                  <option value="beige">Celeste</option>
                </select>
              </div>
              <div className="form-group">
                <label> Modelo </label>
                <select name="size" id="size">
                  <option>
                    Escoge una opción
                  </option>
                  <option value="64">64GB</option>
                  <option value="128">128GB</option>
                  <option value="512">512GB</option>
                  <option value="1">1TB</option>
                </select>
              </div>

            </div>

            <div className="container-add-cart">
              <div className="container-quantity">
                <input
                  type="number"
                  placeholder="1"
                  value="1"
                  min="1"
                  className="input-quantity"
                />
                <div className="btn-increment-decrement">
                  <i className="fa-solid fa-chevron-up"> <AiOutlineArrowUp/> </i>
                  <i className="fa-solid fa-chevron-down"> <AiOutlineArrowDown/> </i>
                </div>
              </div>
              <button className="btn-add-to-cart">
                Añadir al carrito
              </button>
            </div>

            <div className="container-description">
              <div className="title-description">
                <h4>Descripción</h4>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="text-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Laboriosam iure provident atque voluptatibus
                  reiciendis quae rerum, maxime placeat enim cupiditate
                  voluptatum, temporibus quis iusto. Enim eum qui delectus
                </p>
              </div>
            </div>

            <div className="container-social">
              <span>Compartir</span>
              <div className="container-buttons-social">
                <a href="#"><i className="fa-solid fa-envelope"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default ItemDetail;
