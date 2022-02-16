
import React, { useState } from 'react'

const initialForm = {
    artist: "",
    song: "",
};

export const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.artist || !form.song) {
            alert("Datos Incompletos");
            return;
        }
        handleSearch(form);
        setForm(initialForm);
    }

    return (
        <>
            <div className="container w-50  d-flex justify-content-center alig-items-center  bg-secondary ">
                <form onSubmit={handleSubmit} className="w-60 mt-2 p-2">
                    <div className="mb-3">

                        <input placeholder="Nombre del Intérprete"
                            type="text" className="form-control"
                            name="artist"
                            onChange={handleChange}
                            value={form.artist}
                        />

                    </div>
                    <div className="mb-3">

                        <input
                            name="song"
                            type="text"
                            placeholder="Nombre de la canción"
                            className="form-control"
                            onChange={handleChange}
                            value={form.song}
                        />
                    </div>


                    <div className="text-center">
                        <input type="submit" className="btn btn-primary me-2 mr-end" value="Enviar" />

                    </div>
                </form>
            </div>
        </>
    )
}
