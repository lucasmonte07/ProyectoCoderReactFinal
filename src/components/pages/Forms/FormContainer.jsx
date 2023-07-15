import './Form.css'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';

const FormContainer = () => {

  const { handleSubmit, handleChange, errors} = useFormik ({
  
    initialValues: {
        nombre: "",
        apellido: "",
        domicilio: "",
        localidad: "",
        codigoPostal: "",
        email: "",
        celular: "",
        nacionalidad: "",
        provincia: "",
        estadoCivil: ""
    },
    onSubmit: (x) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: ' El formulario ah sido envíado ',
          showConfirmButton: false,
          timer: 1500
      });
      console.log(x);
    },
    validateOnChange: false,
    validationSchema: Yup.object ({
        nombre: 
            Yup.string()
            .required(" Este campo es obligatorio ")
            .min(5, " El campo debe tener al menos 5 caracteres " )
            .max(25, " maximo 25 caracteres "),
        apellido: 
            Yup.string()
            .required(" Este campo es requerido ")
            .min(5, " El campo debe tener al menos 5 caracteres ")
            .max(25, " maximo 25 caracteres "),
        domicilio:
            Yup.string()
            .required( " Este campo es obligatorio ")
            .min(3, " El campo debe tener al menos 5 caracteres  ")
            .max(25, " maximo 25 caracteres "),
        localidad:
            Yup.string()
            .required(" Este campo es obligatorio ")
            .min(3, " El campo debe tener al menos 5 caracteres "),
        codigoPostal:
            Yup.string()
            .required(" Este campo es requerido ")
            .min(4, " El campo debe contener 4 caracteres "),
        email:
            Yup.string()
            .required(" Este campo es obligatorio ")
            .email(" Este campo debe tener formato email ")
            .max(255, " maximo 255 caracteres "),
        celular:
            Yup.string()
            .required(" Este campo es requerido ")
            .min(10," El campo debe tener al menos 11 números ")
            .max(11, " El campo debe tener maximo 11 números "),
        nacionalidad: 
            Yup.string()
            .required("Este campo es requerido")
            .min(3, " El campo debe tener al menos 3 caracteres ")
            .max(25, " El campo debe contar con un maximo de 25 caracteres "),
        provincia:
            Yup.string()
            .required( " Este campo es obligatorio ")
            .min(3, " El campo debe tener al menos 3 caracteres ")
            .max(25, " El campo debe contar con un maximo de 25 caracteres "),
        estadoCivil:
            Yup.string()
            .required(" Este campo es obligatorio ")
            .min(3, " El campo debe tener al menos 3 caracteres ")
            .max(25, " El campo debe contar con un maximo de 25 caracteres ")  
    }), 
  })

  console.log(errors);

  return (
    <div className='ClassContainerGeneralForm'>

      <h2 className='Classh2Form'>
         Solicitud de alta de cuenta 
      </h2>

      <form className='ClassFormGeneral' onSubmit={handleSubmit}>

          <div className='ClassNmbTitu'>
              <label htmlFor=""> Nombre del titular  </label>

              <input 
                type="text" 
                placeholder='Ingrese su nombre' 
                name='nombre' 
                onChange={handleChange}
                />

          </div>

          <div className='ClassApeTitu'>
            <label htmlFor=""> Apellido del titular </label>
            <input 
              type="text" 
              placeholder='Ingrese el apellido' 
              name='apellido'
              onChange={handleChange}
              />
          </div>

          <div className='ClassDomiLocalCod'>
            <label htmlFor=""> Domicilio legal </label>
            <input 
              type="text" 
              placeholder='Domicilio' 
              name='domicilio' 
              onChange={handleChange}
              />

            <label htmlFor=""> Localidad </label>
            <input 
              type="text" 
              placeholder='Localidad' 
              name='localidad' 
              onChange={handleChange}
              />

            <label htmlFor=""> Código Postal </label>
            <input 
              type="number" 
              placeholder='Cod.Postal' 
              name='codigoPostal' 
              onChange={handleChange}
              />
          </div>

          <hr />

          <h2 className='ClassDatosExtras'> Datos extras </h2>

          <div className='ClassNmbTitu'>
              <label htmlFor=""> Correo electronico  </label>
              <input 
                type="text" 
                placeholder='Ingrese su Correo electronico ' 
                name='email' 
                onChange={handleChange}
                />
          </div>

          <div className='ClassApeTitu'>
            <label htmlFor=""> Número de celular </label>
            <input 
              type="number" 
              placeholder='Ingrese su número de celular ' 
              name='celular' 
              onChange={handleChange}
              />
          </div>

          <div className='ClassDomiLocalCod'>
            <label htmlFor=""> Nacionalidad </label>
            <input 
              type="text" 
              placeholder='Nacionalidad' 
              name='nacionalidad' 
              onChange={handleChange}
              />

            <label htmlFor=""> Provincia </label>
            <input 
              type="text" 
              placeholder='Provincia' 
              name='provincia' 
              onChange={handleChange}
              />

            <label htmlFor=""> Estado civil </label>
            <input 
              type="text" 
              placeholder='Estado Civil' 
              name='estadoCivil' 
              onChange={handleChange}
              />
          </div>

          <div className='ClassContainerSend'>
            <button type='submit'> Envíar Formulario </button>
          </div>

      </form>

    </div>
  )
}

export default FormContainer;

