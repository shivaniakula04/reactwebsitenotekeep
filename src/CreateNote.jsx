import React, { useState } from 'react';
const CreateNote = (props) => {

    const [note,setNote]=useState({
        title:"",
        content:"",
    });

    const InputEvent = (event) =>{
       

        const {name,value}=event.target
        setNote((prevdata) =>{
            return {
                ...prevdata,
                [name]:value,
            }

        })
    }
    

    const addEvent = event =>{
        event.preventDefault();
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });


    }
    
    return (
    <>
        <div className="main_note">
            <form>
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/><br></br>
                <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note"></textarea>
                <button onClick={addEvent}><i class="fa fa-plus fa-2x"></i></button>
                    
            </form>
           

        </div>
    
    </>
    );
   
            

};
export default CreateNote;