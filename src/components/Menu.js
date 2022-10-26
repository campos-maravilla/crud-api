import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className="d-flex flex-column justify-content-start">
            <h2>Menu</h2>
            <Link to='/crudapp' className="btn btn-secondary mt-4 ">CRUD</Link>
            <Link to='/formulario' className="btn btn-secondary  mt-4 ">VALIDACIONES</Link>

        </div>
    )
}

export default Menu