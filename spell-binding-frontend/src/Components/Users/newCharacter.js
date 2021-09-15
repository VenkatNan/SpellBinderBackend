import React from 'react'
import {useState} from 'react'
import axios from 'axios'

const NewCharacter = () => {

    const initialState ={
        name:'',
        splLvl: 0,
        class: '',
        img: ''
    }

    const [character, setChar] = useState(initialState)

    const handleChange = (event) => {
        setChar({...character,[event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`http://localhost:4000/users/new`)
        .then(res => {
          setChar(res.data)
        })
    }

    return (
        <div>
            <h1>New Character</h1>
            <div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <input id='name' placeholder='Character Name' type="text" onChange={handleChange} value={character.name}/>
                    </div>
                    <div>
                        <input id='class' placeholder='Character Class' type="text" onChange={handleChange} value={character.class}/>
                    </div>
                    <div>
                        <input id='img' placeholder='Character img url' type="text" onChange={handleChange} value={character.img}/>
                    </div>
                    <div>
                        <input id='splLvl' placeholder='Spell Level' type="number" onChange={handleChange} value={character.splLvl}/>
                    </div>
                    
                    <button type="submit">Submit Character</button>
                </form>
                
            </div>
        </div>
    )
}

export default NewCharacter
