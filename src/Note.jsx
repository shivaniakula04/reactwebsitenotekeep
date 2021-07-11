import React, { useState } from 'react';
const Note = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
    
    return (
    <>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}><i class="fa fa-minus fa-2x"></i></button>
            
        </div>

        
    
    </>
    );
   
            

};
export default Note;