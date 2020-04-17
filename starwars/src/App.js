import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Title from './components/Title';

import { useForm } from 'react-hook-form';

import Character from './components/Character';

import './App.css';

const baseUrl = 'https://rickandmortyapi.com/api/character/?page='


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState([true])
  const [page, setPage] = useState(1)

  const {register, handleSubmit} = useForm()

  const onSubmit = e => setPage(e.page)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  useEffect(() => {
    axios.get(`${baseUrl}${page}`)
      .then(res => {
        
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.log('Error', err)
      })
      setLoading(false)
  }, [character])
  

  return (
    <>
      <Title />
      <div className="submit-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} name='page' placeholder='Enter Page Number' />
        
        <button className='submit-btn' type='submit'>Submit</button>
        </form>
        
      </div>

      <div className='page-container'>
        Current Page: {page}
      </div>
      
        <Container>
          {
            loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
                <>
                  <Character data={character} loading={loading} />
                </>
            )
          }
        </Container>
    </>
  );
}

export default App;
