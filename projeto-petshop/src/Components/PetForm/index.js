import React, { useState } from 'react'
import './index.css'


export default ({ submitForm }) => {

    const [id, setId] = useState([])
    const [nome, setNome] = useState([])
    const [especie, setEspecie] = useState([])
    const [raca, setRaca] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()



        await submitForm({
            id,
            nome,
            especie,
            raca
        })

        var idNovo = (+id + 1)
        setId(idNovo)
        setNome('')
        setEspecie('')
        setRaca('')
    }

    return (
        <form onSubmit={handleSubmit} className="petForm">
            <label htmlFor="id">ID: </label>
            <input
                name={id}
                id="idForm"
                value={id}
                onChange={e => setId(e.target.value)} />


            <label htmlFor="nome">Nome: </label>
            <input name={nome}
                id="nomeForm"
                value={nome}
                onChange={e => setNome(e.target.value)} />


            <label htmlFor="especie">Especie: </label>
            <input name={especie}
                id="especieForm"
                value={especie}
                onChange={e => setEspecie(e.target.value)} />


            <label htmlFor="raca">Raça: </label>
            <input name={raca}
                id="racaForm"
                value={raca}
                onChange={e => setRaca(e.target.value)} />

            <input type="submit" value="Salvar" />
        </form>
    )

}