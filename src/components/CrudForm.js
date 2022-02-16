import React, { useEffect, useState } from 'react';
/* import { useForm } from '../hooks/useForm'; */
import styles from './CrudForm.module.css';


const initialForm = {
    nombre: "",
    correo: "",
    ciudad: "",
    id: null
}

const validationForm = (form) => {


    let errors = {};

    let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexCorreo = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexCiudad = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!form.nombre.trim()) {
        errors.nombre = "El campo 'Nombre' es requerido";

    } else if (!regexNombre.test(form.nombre.trim())) {
        errors.nombre = "Solo letras y espacios";
    } else if (!regexCorreo.test(form.correo.trim())) {

        errors.correo = "Debes escribir un correo valido";
    } else if (!regexCiudad.test(form.ciudad.trim())) {
        errors.ciudad = "Debes escribir solo letras";
    }
    if (!form.correo.trim()) {
        errors.correo = "El campo 'Correo' es requerido";
    }
    if (!form.ciudad.trim()) {
        errors.ciudad = "El campo 'Ciudad' es requerido";
    }


    return errors;
}


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)

        }
    }, [dataToEdit])

    /* const {
        form,
        errors,
        loading,
        response,
        handleChange,

        handleBlur
    } = useForm(initialForm, validationForm);

 */

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);



        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handleReset();
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }



    return (
        <div>
            <h3></h3>
            <div className="container">
                <form className="mt-2 p-2" onSubmit={handleSubmit} >
                    <h1>Ingresa tus datos</h1>
                    <div className="mb-3" >
                        <input className="form-control"
                            type="text"
                            id="nombre"
                            placeholder="Introduce nombre"
                            name="nombre"
                            value={form.nombre} required

                            onChange={handleChange}
                        />
                        {/*  {errors.nombre && <p className={styles.error}>{errors.nombre}</p>} */}
                    </div>
                    <div>

                        <input
                            name="correo"
                            type="text"
                            className="form-control"
                            id="correo"
                            className="form-control"
                            placeholder="Introduce correo"
                            value={form.correo}
                            required

                            onChange={handleChange}
                        />
                        {/*  {errors.correo && <p className={styles.error}>{errors.correo}</p>} */}
                    </div>
                    <div className="mb-3">

                        <input
                            type="text"
                            name="ciudad"
                            className="form-control"
                            id="ciudad"
                            className="form-control"
                            value={form.ciudad}
                            required

                            placeholder="Introduce ciudad"
                            onChange={handleChange}
                        />
                        {/*   {errors.ciudad && <p className={styles.error}>{errors.ciudad}</p>} */}
                    </div>


                    <button type="submit" className="btn btn-primary">Enviar</button>


                </form>

            </div>
        </div>
    )
}


export default CrudForm;