import React from 'react'
import { Link } from 'react-router-dom';
// import { useState} from "react";

const Characters = (props) => {
    const handleDelete = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return (
        
        <div>
            <h1>Characters</h1>
            <section>
            {props.character.map((char) => (
                <div> 
                 
                
                   <h1>{char._id}</h1>

                 <div className="card">
                     
                 <Link to={`/users/details/${char._id}`}>
                   
                   <div className="card-image">
                     <img src={char.img} alt={char.name} />
                   </div>

                  </Link>
                   <div className="card-title">
                     <h3>{char.name}</h3>
                   </div>
                 </div>
                 
               <form onSubmit={handleDelete}>

                    <button className='btn btn-danger'type="submit">Delete</button>
                    
                </form>
               </div>
               
                ))
            }
        </section>
        </div>
    )
}

export default Characters
