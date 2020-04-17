import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Dimmer, Loader } from 'semantic-ui-react'

import Character from './components/Character';

import './App.css';

const baseUrl = 'https://rickandmortyapi.com/api/character/?page=2'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState([true])
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  useEffect(() => {
    axios.get(`${baseUrl}`)
      .then(res => {
        console.log(res.data.results)
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
      setLoading(false)
  }, [character])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <h1 className="Header">Characters</h1>
        <Container>
          {
            loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
                <>
                  <Character data={character} />
                </>
            )
          }
        </Container>
    </>
  );
}

export default App;
