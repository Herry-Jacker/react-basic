import React, {useEffect, useState} from "react";
import User from "./components/User";
import AddUser from "./components/AddUser";

function App() {

  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then( res => res.json())
      .then( users => {
        let rawUsers = users.results;
        let filteredUsers = rawUsers.map(usr => {
          return {
            uuid: usr.login.uuid,
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone: usr.phone,
            cell: usr.cell,
            image: usr.picture.thumbnail
          }
        });
        setUsers(filteredUsers);
      })
      .catch( err => console.log(err))
  }, []);

  const removeUserHandler = (uuid) => {
    let remainUser = users.filter( usr => usr.uuid != uuid);
    setUsers(remainUser);
  }

  const showFormHandler = () => {
    setShowForm(!showForm);
  }

  const addUserHandler = (user) => {
    let newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container" style={{maxWidth: 800}}>
          <div className="navbar-brand">OurEmployee</div>
          <div className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={showFormHandler} style={{cursor: "pointer"}}>Add User +</a>
            </li>
          </div>
        </div>
      </nav>
      <div className="container my-5" style={{maxWidth: 800}}>
        {showForm && <AddUser addUser={addUserHandler}/>}
        {
          users.map(usr => <User key={usr.uuid} user={usr} removeUser={removeUserHandler} />)
        }
      </div>
    </div>
  );
}

export default App;
