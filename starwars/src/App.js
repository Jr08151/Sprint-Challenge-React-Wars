import React, {useState, useEffect}from 'react';
import {Row} from "reactstrap"
import Character from './components/Character'
import Axios from 'axios'

const App = () => {

  const [people,setPeople] = useState([])

  useEffect(()=>{Axios.get('https://rickandmortyapi.com/api/character')
.then(resp=> setPeople(resp.data.results))
.catch(err=>console.log('error', err));
},[]);
console.log(people)
  return (
    <div className="App">
      <h1 className="display-3" className='text-center'>Characters</h1>
      <Row>
            {people.map((peopleInfo=>{
            return <Character image={peopleInfo.image} name={peopleInfo.name} status={peopleInfo.status} species={peopleInfo.species} img={peopleInfo.status} key={peopleInfo.id} gender={peopleInfo.gender}/>
            }))}  
      </Row>
    </div>
  );
}

export default App;