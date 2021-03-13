import React, { useState } from 'react'
import './index.css'

export default ({ pet }) => {


    return (
        <div className="Pet">

            <div className="header">
                <h2 className="idPet">{pet.id}</h2>
                <h2>{pet.nome}</h2>
            </div>
            <div className="body">
                <p>Espécie: <span>{pet.especie}</span></p>
                <p>Raça: <span>{pet.raca}</span></p>
            </div>

        </div>
    )


}