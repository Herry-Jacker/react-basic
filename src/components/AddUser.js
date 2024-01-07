import React, { useState } from "react";

function AddUser(props) {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cell, setCell] = useState('');
    const [uuid, setUuid] = useState('');

    const imageChangeHandler = (e) => {
        setImage(e.target.value) 
    };
    const nameChangeHandler = (e) => {
        setName(e.target.value) 
    };
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value) 
    };
    const cellChangeHandler = (e) => {
        setCell(e.target.value) 
    };
    const uuidChangeHandler = (e) => {
        setUuid(e.target.value) 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            name, image, phone, cell, uuid,
        }
        props.addUser(user);
    }

    return (
        <div className="card bg-dark p-3 mb-3">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Image" id="image" onChange={imageChangeHandler} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" id="name" onChange={nameChangeHandler} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone" id="phone" onChange={phoneChangeHandler} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Cell" id="cell" onChange={cellChangeHandler} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Uuid" id="uuid" onChange={uuidChangeHandler} />
                </div>
                <button type="submit" className="btn float-end btn-primary btn sm">Submit</button>
            </form>
        </div>
    )
}

export default AddUser;