import React, { useEffect, useState } from 'react';


const initialForm = {
    nombre: "",
    correo: "",
    ciudad: "",
    id: null
}


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)

        }
    }, [dataToEdit])

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

            <div className="container w-100">
                <form onSubmit={handleSubmit} >
                    <h3>Ingresa tus datos</h3>
                    <div className="mb-3" >
                        <input className="form-control"
                            type="text"
                            id="nombre"
                            placeholder="Introduce nombre"
                            name="nombre"
                            value={form.nombre} required

                            onChange={handleChange}
                        />
                    </div>
                    <div>

                        <input
                            name="correo"
                            type="text"

                            id="correo"
                            placeholder="Introduce correo"
                            className="form-control mb-3"
                            value={form.correo}
                            required

                            onChange={handleChange}
                        />

                    </div>
                    <div className="mb-3">

                        <input
                            type="text"
                            name="ciudad"
                            id="ciudad"
                            className="form-control"
                            value={form.ciudad}
                            required

                            placeholder="Introduce ciudad"
                            onChange={handleChange}
                        />

                    </div>


                    <button type="submit" className="btn btn-primary">Enviar</button>


                </form>

            </div>
        </div>
    )
}


export default CrudForm;