import React, { memo, useMemo } from 'react'

/* let maxNumero = 0

for (let i = 0; i < 1000000000; i++) {
    maxNumero++
} */

const MemoHijo = ({ contador, sumar, restar }) => {
    const maxNumero = useMemo(() => {
        let maxNumero = 0
        for (let i = 0; i < 10000000000; i++) {
            maxNumero++
        }
        return maxNumero
    }, [])
    console.log('renderizando hijo')
    return (
        <div>
            <h1>MemoHijo</h1>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>

            <h3>{maxNumero}</h3>
        </div>

    )
}

export default memo(MemoHijo)