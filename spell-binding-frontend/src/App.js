import './App.css';
import {Route, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Character from './Components/Users/Characters'
import SpecificCharacter from './Components/Users/specificCharacter'
import NewChar from './Components/Users/newCharacter'
import EditChar from './Components/Users/EditChar'




function App() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/users/index`)
    .then(res => {
        setCharData(res.data)
    })
}, [])
  
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand logo" href="/"><h3> Spell Binding</h3></a>
        <button className='btn btn-danger' > <Link to="/users/new/" className='link'> New Character </Link></button>
        
    
    </nav>

      <Route exact path="/" 
        render={() => 
          <Character character={charData}/>
      }/>


      <Route exact path="/users/details/:name" render={routerProps => <SpecificCharacter match={routerProps.match} characters={charData} setNewChar={setCharData}/>}/>

      <Route exact path="/users/new" render={() => <NewChar characters={charData} />}/>

      <Route exact path="/users/edit/:id" render={routerProps => <EditChar match={routerProps.match} characters={charData} setCharData={setCharData} />}/>

    </div>
  );
}

export default App;
