import React, { useState } from 'react';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        id: 1,
        nombre: "Jorge",
        correo: "mauro@gamil.com",
        ciudad: "España",
    },
    {
        id: 2,
        nombre: "Carla",
        correo: "karcla@gamil.com",
        ciudad: "Chile",
    }

];


const Crudapp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
        //console.log(data);
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'  ?`

        )
        if (isDelete) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    }

    return (
        <div className="container-fluid col-lg-12 col-md-8 col-xs-4 ">
            <div className="row">
                <div className="">

                    {/*  <h1 className="text-primary">Practica #1</h1> */}
                    <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                    />
                </div>
            </div>
            <CrudTable data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />
        </div>
    )
}


export default Crudapp;