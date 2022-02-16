/* const CrudApi = () => {
    return (
        <div>
            <h2>CRUD API</h2>
        </div>
    )
}

export default CrudApi
 */

import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helphttp';
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from './Loader';
import Message from './Message';


const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/clientes";


    useEffect(() => {
        setLoading(true)
        helpHttp()
            .get(url).then((res) => {
                //console.log(res);
                if (!res.err) {
                    setDb(res);
                    setError(null);
                } else {
                    setDb(null);
                    setError(res);
                }
                setLoading(false)
            })
    }, [url])
    const createData = (data) => {
        data.id = Date.now();

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        api.post(url, options).then((res) => {
            console.log(res);
            if (!res.err) {
                setDb([...db, res]);

            } else {
                setError(res);
            }
        });
        //console.log(data);
    }

    const updateData = (data) => {
        /* api */
        let endpoint = `${url}/${data.id}`;
        console.log(endpoint);

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        api.put(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                let newData = db.map(el => el.id === data.id ? data : el);
                setDb(newData);
                //setDb([...db, res]);/* api falsa */

            } else {
                setError(res);
            }
        });
        /* api */
        //let newData = db.map(el => el.id === data.id ? data : el);
        //setDb(newData);
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'  ?`

        )
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };

            api.del(endpoint, options).then(res => {
                if (!res.err) {
                    let newData = db.filter((el) => el.id !== id);
                    setDb(newData);

                } else {
                    setError(res);
                }
            })
        } else {
            return;
        }
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-12 col-md-12">

                    {/*  <h1 className="text-primary">Practica #1</h1> */}
                    <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                    />
                </div>
            </div>
            {loading && <Loader />}
            {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
            {db && <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />
            }

        </div>
    )
}


export default CrudApi;