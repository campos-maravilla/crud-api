
import React from 'react'
import CrudRow from "./CrudRow";


const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (

        <div>
            <h3 className="text-center">Tabla de datos</h3>
            <table className="table table-success table-striped table table-hover " >
                <thead>


                    <tr className="text-center">

                        <th >Nombre</th>
                        <th>Correo</th>
                        <th>Ciudad</th>
                        <th colSpan="3">Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {data.length > 0 ?
                        data.map((el) => <CrudRow key={el.id} el={el} setDataToEdit={setDataToEdit}
                            deleteData={deleteData} />)

                        : (
                            <tr><td colSpan="4">Sin datos</td></tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;