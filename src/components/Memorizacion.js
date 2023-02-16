import { useCallback, useState } from 'react'
import MemoHijo from './MemoHijo';

const Memorizacion = () => {
    const [contador, setContador] = useState(0);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    /*  const sumar = () => {
         setContador(contador + 1)
     } */

    const sumar = useCallback(
        () => {
            setContador(contador + 1)
        },
        [contador]
    )

    /* const restar = () => {
        if (contador <= 0) {
            setContador(contador)
        } else {
            setContador(contador - 1)
        }
    } */

    const restar = useCallback(
        () => {
            if (contador <= 0) {
                setContador(contador)
            } else {
                setContador(contador - 1)
            }
        },
        [contador]
    )
    return (
        <div>
            <h1>Memorizacion</h1>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <input type="text" onChange={handleChange} value={text} />
            {/*    <MemoHijo contador={contador} sumar={sumar} restar={restar} /> */}
        </div>
    )
}

export default Memorizacion