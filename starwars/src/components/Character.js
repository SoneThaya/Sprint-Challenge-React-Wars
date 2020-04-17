// Write your Character component here
import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const CardCharacter = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 5px;
    border-top: solid 4px #CF1124;
    height: 382px;
    margin: 0 auto;
    position: relative;
    width: 480px;
    padding: 90px;
`

const Character = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
     
      <Grid columns={3}>
        {
          data.map((character) => {
            return (
              <Grid.Column key={character.id}>
                <CardCharacter>
                  <Card.Content>
                    <Card.Header><img src={character.image} /></Card.Header>
                    <Card.Description>
                      <p>Name: {character.name}</p>
                      <p>Species: {character.species}</p>
                      <p>Gender: {character.gender}</p>
                      <p>Location: {character.location.name}</p>
                    </Card.Description>
                  </Card.Content>
                </CardCharacter>
              </Grid.Column>
            )
          })
        }
      </Grid>
      
    </>
  )
}

export default Character;