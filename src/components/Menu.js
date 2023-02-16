import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"


const Menu = () => {
    //console.log(useContext(ThemeContext))
    const { theme, handleTheme } = useContext(ThemeContext)
    return (

        <div className={`text-center py-1 my-1 px-2 d-flex flex-column justify-content-start ${theme}`}>
            <div className={`text-center py-1 my-1 ${theme}`}>
                <input type="radio" name="theme" id="light" value="light" onChange={handleTheme} />
                <label htmlFor="light" className='mx-2'>Claro</label>
                <input type="radio" className='mx-2' name="theme" id="dark" value="dark" onChange={handleTheme} />
                <label htmlFor="dark">Oscuro</label>
            </div>
            <h2>Menu</h2>
            <Link to='/themeContext' className="btn btn-warning mt-4 ">SIN CONTEXT</Link>
            <Link to='/memorizacion' className="btn btn-warning mt-4 ">MEMORIZACION</Link>
            <Link to='/modal' className="btn btn-warning mt-4 ">MODAL</Link>
            <Link to='/crudapp' className="btn btn-warning mt-4 ">CRUD</Link>
            <Link to='/formulario' className="btn btn-warning  mt-4 ">VALIDACIONES</Link>
            <Link to='/pokemon' className="btn btn-warning  mt-4 ">POKEMONES</Link>
            <Link to='/todolist' className="btn btn-warning  mt-4 ">TODO LIST</Link>

        </div>
    )
}

export default Menu