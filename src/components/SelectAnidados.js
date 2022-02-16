import SelectList from "./SelectList"
import React, { useState } from 'react';

const SelectAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

    return (
        <div>
            <h1>Selects Anidados</h1>
            <h3>México</h3>
            <SelectList
                title="estado"
                url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`} handleChange={(e) => {
                    setState(e.target.value)
                }} />
            {state && (<SelectList
                title="municipios"
                url="" handleChange={(e) => {
                    setTown(e.target.value)
                }}
            />
            )}
            {town && (<SelectList title="colonia" url="" handleChange={(e) => {
                setSuburb(e.target.value);
            }}

            />
            )}

            <pre>
                <code>
                    {state}-{town}-{suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectAnidados
