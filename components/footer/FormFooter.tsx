import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import { SpinnerLoading } from '../spinnerLoading/SpinnerLoading';

export const FormFooter: FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone: '',
        city1: '',
        city2: '',
        comment: '',
    });
    const [loading, setLoading] = useState(false);

    const {name, email, phone, city1, city2, comment} = formData;

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if(isValid()){

            setLoading(false);

            Swal.fire({
                title: 'Success!',
                text: 'El formulario es válido!',
                icon: 'success',
                confirmButtonText: 'ok'
            });

            console.log({formData});
            setFormData({
                name: '',
                email:'',
                phone: '',
                city1: '',
                city2: '',
                comment: '',
            })
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target;
        // Establece el valor del checkbox en función de la etiqueta correspondiente
        const cityValue = checked && e.target.nextSibling ? e.target.nextSibling.textContent : '';
        setFormData({
          ...formData,
          [name]: cityValue,
        });
      };

    const isValid = () => {
        if(name.trim().length <= 0){

            Swal.fire({
                title: 'Error!',
                text: 'El nombre es requerido',
                icon: 'error',
                confirmButtonText: 'ok'
            });
              
            return false;
        }
        if(!(validator.isEmail(email))){
            
            Swal.fire({
                title: 'Error!',
                text: 'El email es incorrecto',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        if(phone.trim().length <= 8){
            
            Swal.fire({
                title: 'Error!',
                text: 'El número de teléfono es requerido',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        
        return true;
    }

    return (
        <form 
            className='formfooter'
            onSubmit={handleSubmit}
        >
            <label id='name'>Nombre</label>
            <input 
                type="text"
                name='name'
                value={name} 
                onChange={handleChange}
            />

            <label id="email">Email</label>
            <input 
                type="email" 
                name='email'
                value={email}
                onChange={handleChange}
            />

            <label id="phone">Teléfono</label>
            <input 
                type="tel" 
                name='phone'
                value={phone}
                onChange={handleChange}
            />

            <label id="comment">Mensaje</label>
            <textarea 
                name="comment" 
                value={comment}
                onChange={handleChange}
            ></textarea>
            
            {
                loading
                ? <SpinnerLoading />
                : <input type="submit" value="Enviar" />
            }
        </form>
    )
}