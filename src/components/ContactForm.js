import { useForm } from "../hooks/useForm";
import '../index.css';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = (form) => {
    let errors = {};

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido"
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido"
    }

    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}

export const ContactForm = () => {
    const { form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm);
    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Escribe tu nombre" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                {errors.name && <p style={styles}>{errors.name}</p>}

                <input type="email" name="email" placeholder="Escribe tu correo" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                {errors.email && <p style={styles}>{errors.email}</p>}

                <input type="text" name="subject" placeholder="Escribe el asunto a tratar" onBlur={handleBlur} onChange={handleChange} value={form.subject} required />
                {errors.subject && <p style={styles}>{errors.subject}</p>}

                <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
                    onBlur={handleBlur} onChange={handleChange} value={form.comments}></textarea>
                {errors.comments && <p style={styles}>{errors.comments}</p>}

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
