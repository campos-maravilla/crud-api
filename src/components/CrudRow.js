import React from 'react';

const CrudRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, nombre, correo, ciudad } = el;
    return <tr className="text-center " >

        <td> {nombre}</td>
        <td>{correo}</td>
        <td>{ciudad}</td>
        <td>
            <button className="btn btn-primary me-3"
                onClick={() => setDataToEdit(el)} >Editar</button>
            <button className="btn btn-danger" onClick={() => deleteData(id)}>Eliminar</button></td>
    </tr >
}

export default CrudRow;