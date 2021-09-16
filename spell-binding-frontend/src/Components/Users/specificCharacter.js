import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const SpecificCharacter = ({characters,match}) => {

    const charDetail = characters.filter(char=> char.name === match.params.name)[0]

    console.log(charDetail);
    return (
        <div class='specificChar'>
            <h1>{charDetail.name}</h1>
            <img src={charDetail.img} alt='fantasy character'/>
            <h4>Class: {charDetail.class}</h4>
            <h4>Spell Level: {charDetail.splLvl}</h4>

            <table>
            
            </table>

            <Link to={{pathname:`/users/edit/${charDetail._id}`, state:charDetail}} class='btn btn-success'>Update {charDetail.name}</Link >
        </div>
        
    )
}

export default SpecificCharacter
