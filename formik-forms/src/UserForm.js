import React, { useRef, useState } from 'react';

function UserForm() {
    const name = useRef();
    const age = useRef();
    const [nameError, setNameError] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("HTML Forms");
        console.log(name.current.value);
        console.log(age.current.value);
        if(!name.current.value) {
            setNameError("Name field is required");
        }
        else if(name.current.value.length > 20){
            setNameError("Name field must be less then 20 characther");
        }
    }
  return (
    <div >
        <h3>HTML Form</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" ref={name} type="text" />
                <div style={{color: "red"}}>{nameError}</div>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input id="age" ref={age} type="number" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default UserForm;