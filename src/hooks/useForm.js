import { useState } from 'react';

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = onValidate(form)
        setErrors(err)

        //console.log(Object.keys(err).length)
        if (Object.keys(err).length === 0) {
            // console.log("Enviando formulario...")
            /* } else {
                setErrors(err) */
            setLoading(true)
            fetch("https://formsubmit.co/ajax/mauromj35@gmailmmmm.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.success === "true" && setForm(initialData)
                    //setForm(initialData)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                });
        }

    }

    return { form, loading, errors, handleChange, handleSubmit }
}

export default useForm