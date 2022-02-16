import React from 'react'
import { useState, useEffect } from 'react';
import './Pokemons.css';

function Pokemon2({ avatar, name }) {

    return (

        <figure>
            <img src={avatar} alt="pokemons" />
            <figcaption>{name}</figcaption>
        </figure>

    );
}

const Profile = (id) => {
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                //console.log(json);
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then((json) => {
                            //console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                            setPokemon((pokemons) => [...pokemons, pokemon]);
                        })
                });
            });

    }, []);
    return (
        <div className="figura">
            <h2>Pokemons</h2>
            {pokemons.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                pokemons.map((el) => (
                    <Pokemon2 key={el.id} name={el.name} avatar={el.avatar} />
                ))
            )}
        </div>
    )
}

export default Profile
