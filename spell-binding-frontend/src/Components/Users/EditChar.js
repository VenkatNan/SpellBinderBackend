import React from "react";
import { useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditChar = ({characters, match, setCharData}) => {
    let id = match.params.id;
    let history = useHistory()

    let currentChar = characters.filter((char) => {
        if (char._id === id) {
          return char;
        }
      })[0];
      console.log(currentChar);

      const [editChar, setEditChar] = useState(currentChar);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editChar);
    axios
      .put(`http://localhost:4000/users/edit/${id}`, { ...editChar })
      .then((res) => {
        setEditChar(res.data.char);
        setCharData(res.data.characters);
        history.push('/')
      });
  };

  const handleChange = (event) => {
    setEditChar({ ...editChar,[event.target.id]: event.target.value });
  };

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(editChar);
}

    return (
        <div class='editChar'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input id='name' placeholder='Character Name' type="text" onChange={handleChange} value={editChar.name}/>
                </div>
                <div>
                    <input id='class' placeholder='Character Class' type="text" onChange={handleChange} value={editChar.class}/>
                </div>
                <div>
                    <input id='img' placeholder='Character img url' type="text" onChange={handleChange} value={editChar.img}/>
                </div>
                <div>
                    <input id='splLvl' placeholder='Spell Level' type="number" onChange={handleChange} value={editChar.splLvl}/>
                </div>
                
                    <button type="submit">Submit Character</button>

            </form>
            <form onSubmit={handleDelete}>

                    <button id={editChar._id} className='btn btn-danger'type="submit">Delete</button>
                    
                </form>
        </div>
    )
}

export default EditChar
