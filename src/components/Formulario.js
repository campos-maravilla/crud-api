import useForm from "../hooks/useForm"

export const Formulario = () => {

    const initialData = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
    }

    const onValidate = (form) => {
        //let isError = false
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;

        if (!form.nombre.trim()) {
            errors.nombre = 'Debes escribir un "Nombre" '
            // isError = true
        } else if (!regexName.test(form.nombre)) {
            errors.nombre = 'El campo "Nombre" solo acepta letra y espacios.'

        }

        if (!form.correo.trim()) {
            errors.correo = 'Debes escribir un "Correo" '

        } else if (!regexEmail.test(form.correo)) {
            errors.correo = 'El campo "Correo" no tiene formato valido.'

        }

        if (!form.asunto.trim()) {
            errors.asunto = 'Debes escribir un "Asunto" '

        } else if (!regexName.test(form.asunto)) {
            errors.asunto = 'El campo "Asunto" solo acepta letra y espacios.'

        }

        if (!form.mensaje.trim()) {
            errors.mensaje = 'Debes escribir un "Mensaje" '

        } else if (!regexComments.test(form.mensaje)) {
            errors.mensaje = 'El campo "Mensjae" no debe exceder los 255 caracteres'

        }
        //return isError ? errors : null
        return errors
    }

    const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)
    //console.log(form)

    return (
        <div className="container w-100">
            <h1 className="text-primary fs-4 text-center" >Validación de formulario</h1>
            <h3 className="text-center">Ingresar  datos</h3>
            <form onSubmit={handleSubmit} className='w-75 m-auto'>

                <div className="mb-3" >
                    <input className="form-control"
                        type="text"
                        placeholder="Introduce nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <div className="alert alert-danger p-1" role="alert">
                        {errors.nombre}
                    </div>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Introduce correo"
                        className="form-control mb-3"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                    />
                    {errors.correo && <div className="alert alert-danger p-1" role="alert">
                        {errors.correo}
                    </div>}
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Introduce asunto"
                        name="asunto"
                        value={form.asunto}
                        onChange={handleChange}
                    />
                </div>
                {errors.asunto && <div className="alert alert-danger p-1" role="alert">
                    {errors.asunto}
                </div>}

                <div>

                    <textarea className="form-control" placeholder="Introduce mensaje"
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                    ></textarea>
                    {errors.mensaje && <div className="alert alert-danger p-1" role="alert">
                        {errors.mensaje}
                    </div>}
                </div>

                <button type="submit" disabled={loading} className="btn btn-warning mt-3">{loading ? "Enviando" : "Enviar"}</button>
            </form>
        </div>
    )
}
