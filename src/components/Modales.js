import React, { useState } from 'react'
import Modal from './Modal'
import Modal2 from './Modal2';
import Modal3 from './Modal3';


const Modales = () => {
    const [mostrar, setMostrar] = useState(false);
    const [modal, setModal] = useState(false);
    const [modal3, setModal3] = useState(false);

    return (
        <>
            <h2 className='text-center'>Modales</h2>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary me-1' onClick={() => setMostrar(true)}>Ver modal 1</button>
                <Modal isOpen={mostrar} onClose={() => setMostrar(false)} >
                    <h2>Prueba de children</h2>
                </Modal>

                <button className='btn btn-primary me-1' onClick={() => setModal(true)}>Ver Modal 2</button>
                <Modal isOpen={modal} onClose={() => setModal(false)} >
                    {/* <h2>Prueba de children</h2> */}
                    <Modal2 />
                </Modal>

                <button className='btn btn-primary' onClick={() => setModal3(true)}>Ver Modal 3</button>
                <Modal isOpen={modal3} onClose={() => setModal3(false)} >
                    {/* <h2>Prueba de children</h2> */}
                    <Modal3 />
                </Modal>
            </div>
        </>
    )
}

export default Modales