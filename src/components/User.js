import React from "react";

function User(props) {
    const handleRemove = () => {
        props.removeUser(props.user.uuid)
    }
    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-2">
                    <img src={props.user.image} width={"50px"} height={"50px"}></img>
                </div>
                <div className="col-5">
                    <strong>Ph: {props.user.phone}</strong><br></br>
                    <strong>Cell: {props.user.cell}</strong>
                </div>
                <div className="col-3 mt-2">
                    <p>{props.user.name}</p>
                </div>
                <div className="col-1 mt-2">
                    <button className="btn btn-sm btn-danger" onClick={handleRemove}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;