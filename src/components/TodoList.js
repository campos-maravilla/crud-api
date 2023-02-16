import React, { useContext, useEffect, useState } from 'react'
import { VscTrash } from 'react-icons/vsc'
import { VscEdit } from 'react-icons/vsc'
import styles from './TodoList.css'
import Modal from './Modal'
import { ThemeContext } from '../context/ThemeContext'

/* 
  {
            titulo: "Titulo1",
            descripcion: "Descripcion 1",
            isCompleted: true,
            id: 1
        },
        {
            titulo: "Titulo2",
            descripcion: "Descripcion 2",
            isCompleted: false,
            id: 2
        },

 */

const TodoList = () => {
    const { theme } = useContext(ThemeContext)
    const [todoArray, setTodoArray] = useState([]);
    const completeCount = todoArray.filter(todo => todo.isCompleted === true).length
    const pendingCount = todoArray.length - completeCount

    const [formData, setFormData] = useState({ titulo: '', descripcion: '' });
    const [todoEditId, setTodoEditId] = useState(null);

    const [modalEliminar, setModalEliminar] = useState({
        isOpen: false,
        todo: {},
    });

    useEffect(() => {
        const data = window.localStorage.getItem("todoItems")
        if (data !== null) setTodoArray(JSON.parse(data))
    }, [])

    useEffect(() => {
        const data = JSON.stringify(todoArray)
        window.localStorage.setItem("todoItems", data)
    }, [todoArray]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    const addTodo = (e) => {
        e.preventDefault();
        /*  if (formData.titulo !== "" && formData !== "descripcion") {
             const todo = formData
             todo.isCompleted = false
             todo.id = Date.now()
             console.log(todo)
             setTodoArray([...todoArray, todo])
             setFormData({ titulo: '', descripcion: '' })
         } */
        if (todoEditId !== null) {
            const newTodo = [...todoArray]
            //todo.id === todoEditId por se guardo en en estado  setTodoEditId(id)
            let todo = newTodo.find((todo) => todo.id === todoEditId)
            todo.titulo = formData.titulo
            todo.descripcion = formData.descripcion
            setTodoArray(newTodo)
            setTodoEditId(null)
            setFormData({ titulo: '', descripcion: '' })
        } else {
            if (formData.titulo !== "" && formData !== "descripcion") {
                const todo = formData
                todo.isCompleted = false
                todo.id = Date.now()
                console.log(todo)
                setTodoArray([...todoArray, todo])
                setFormData({ titulo: '', descripcion: '' })
            }
        }
    }

    const deleteTodo = (id) => {
        const newTodos = todoArray.filter(todo => todo.id !== id)
        setTodoArray(newTodos)
        setModalEliminar({ isOpen: false, todo: {} })
    }

    const toggleTodo = (id) => {
        const newTodo = [...todoArray]
        let todo = newTodo.find((todo) => todo.id === id)
        todo.isCompleted = !todo.isCompleted
        setTodoArray(newTodo)
    }

    const deleteAllCompleted = () => {
        const newTodo = todoArray.filter(todo => todo.isCompleted === false)
        setTodoArray(newTodo)
    }

    const setTodoEdit = (id) => {
        //busca el todo que coincida con el todo por medio del id
        const todo = todoArray.find((todo) => todo.id === id)
        //esto es para pasar los datos al formulario
        setFormData({ titulo: todo.titulo, descripcion: todo.descripcion })
        // y esto es para saber que todo se pasa
        setTodoEditId(id)
    }

    return (

        <div className={`container m-75 ${theme}`}>
            <form onSubmit={addTodo} className='input-group shadow rounded p-3 d-flex justify-content-center align-items-center w-75 m-auto'>
                <input type="text"
                    placeholder='Titulo'
                    className='me-3  form-control'
                    name='titulo'
                    value={formData.titulo}
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder='Descripcion'
                    className='me-3 form-control'
                    name='descripcion'
                    value={formData.descripcion}
                    onChange={handleChange}
                />
                <input type="submit" className='btn btn-primary' value="Agregar todo" />
            </form>


            <div className='shadow rounded p-3 mt-5 w-100'>


                <div className='d-flex align-items-center justify-content-between list-group-item'>
                    <h5>Todo List</h5>
                    <button className='btn btn-danger'
                        onClick={deleteAllCompleted}
                    >Eliminar tareas completado</button>
                </div>


                {
                    todoArray.length === 0 ? (
                        <div className='tareas '>
                            <h3>No hay tareas aun</h3>
                        </div>
                    ) : (



                        todoArray.map((todo) =>

                            <div key={todo.id} className="d-flex align-items-center list-group-item"

                            >
                                <input type="checkbox" className='form-check mx-2' defaultChecked={todo.isCompleted}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <p className={`p-0 m-0 flex-grow-1  ${todo.isCompleted ? 'todo-completed' : ''}`}>
                                    {todo.titulo}<br />
                                    <span className='text-muted'>{todo.descripcion}</span>
                                </p>
                                {todo.isCompleted && <span className='badge bg-success mx-2 p-2 '>COMPLETADA</span>}
                                <button className='btn btn-danger mx-1'
                                    onClick={() => setTodoEdit(todo.id)}
                                >
                                    <VscEdit />
                                </button>
                                <button onClick={() => setModalEliminar({ isOpen: true, todo: todo })}
                                    className='btn btn-warning mx-1' >
                                    <VscTrash />
                                </button>
                            </div>
                        )
                    )
                }

                <div className='list-group-item'>

                    <span>total de tareas:<h3 className="badge bg-secondary">
                        {todoArray.length}

                    </h3><br /> completadas: <h3 className="badge bg-secondary">{completeCount} </h3><br /> Pendientes: <h3 className="badge bg-secondary">{pendingCount}</h3></span>
                </div>
            </div>
            <Modal isOpen={modalEliminar.isOpen} onClose={() => setModalEliminar({ isOpen: false, todo: {} })}>
                <div className="container text-center py-5">
                    <h3>¿Desea eliminar la tarea '{modalEliminar.todo.titulo}'?</h3>
                    <div className='w-100 d-flex justify-content-center mt-3'>
                        <button className='btn btn-danger mx-1' onClick={() => deleteTodo(modalEliminar.todo.id)}>Si,si eliminar tarea</button>
                        <button className='btn btn-success mx-1'
                            onClick={() => setModalEliminar({ isOpen: false, todo: {} })}>No,no eliminar tarea</button>
                    </div>
                </div>
            </Modal >
        </div >
    )

}

export default TodoList