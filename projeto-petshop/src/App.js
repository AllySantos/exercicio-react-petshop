import './App.css'
import React, { useEffect, useState } from 'react'
import api from './services/api'

import Pet from './Components/Pet'
import PetForm from './Components/PetForm'


function App() {

  const [pets, setPets] = useState([])

  useEffect(() => {
    async function loadPets() {

      const responseIndex = await api.get('/pets')
      setPets(responseIndex.data)

      console.log(responseIndex.data)
    }

    loadPets();
  }, [])

  async function handleSubmit(data) {


    const response = await api.post('/pets', data)


    setPets([...pets, response.data])

  }

  return (
    <div className="main">

      <h1> Cadastrar pets</h1>

      <div id="petForm">
        <PetForm submitForm={handleSubmit} />
      </div>


      <h1>Lista de Pets</h1>

      <div className="pets">

        {pets.map(pet => (
          < Pet key={pet.id} pet={pet} />
        ))
        }

      </div>
    </div >
  )

}

export default App;
