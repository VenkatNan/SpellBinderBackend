import React from 'react'
import {Link} from 'react-router-dom'

const SpecificCharacter = ({match}) => {
    console.log(match.params._id);
    return (
        <div>
            <h1>Specific Character</h1>
            <h2></h2>
            
        </div>
    )
}

export default SpecificCharacter
