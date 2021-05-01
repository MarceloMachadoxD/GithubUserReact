import React, { useState } from 'react';
import './App.css';
import avatar from './images/av.svg'

function App() {

    const [search, setSearch] = useState("");
    const [userData, setUserData] = useState();

    const handleSubmit = (event) => {
      event.preventDefault();
      //window.alert("user");
      fetch(`https://api.github.com/users/${search}` )
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
    }

    console.log(userData)

    const handleChange = (event) => {
      //console.log(event.target.value);
      setSearch(event.target.value);
    }

  return (
   <div className="container text-center">

   <h1 className="py-5 text-uppercase">Github Profile</h1>

    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Github Username</label>

        <div className="input-group">
            <input 
            type="text" 
            className="form-control" 
            required
            value={search}
            onChange={handleChange}
            />
          
          <span className="input-group-btn">
            
            <button type="submit" 
            className="btn btn-success">
              Search
            </button>

          </span>
        </div>

        </div>

    </form>

    <div className="py-5">
      


      {!userData && ( 
      
        <img src={avatar} 
        className="responsive rounded-circle" 
        alt="avatar" 
        width="150px"
        />)}

      {userData && (

        <div>

          <h1>
          <a 
          href={userData.html_url}  
          target="_new">
            {userData.name}
          </a>
        </h1>


        <img src={userData.avatar_url} 
        className="responsive rounded-circle" 
        alt="avatar" 
        width="150px"
        />


          <h3>{userData.location}</h3>

          <h5>
            <a 
            href={userData.blog}
            target="_new" 
            className="text-info">
              {userData.blog}
            </a>
          </h5>

        </div>


      )}
      






    </div>
   
   </div>
  );
}

export default App;
