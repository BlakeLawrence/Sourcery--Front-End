import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../navbar";
import Input from "../Input/Input";
import Resources from "../Resources/Resources";

function App() {
  const [resource, setResource] = useState([]);

  // function to add a new resource to resource array
  // spreads resource and adds new resource
  const addResource = (newResource) => {
    setResource([...resource, newResource]);
  };

  //Function - updates db when like button clicked
  const onLikeClick = (text) => {
    const newObj = { ...text, likes: text.likes + 1 };

    patchResources(newObj);
    setResource(
      resource.map((obj) => {
        if (obj.id === text.id) return { ...obj, likes: obj.likes + 1 };
        return obj;
      })
    );
  };

  // patch request used to update likes
  async function patchResources(input) {
    await fetch("http://localhost:5001/v1/resources", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Method": "PATCH",
      },
      body: JSON.stringify(input),
    });
  }

  // Post function to add a new resource to the backend
  async function postResources(input) {
    const response = await fetch("http://localhost:5001/v1/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    return data;
  }

  // Delete Route
  async function deleteResource(id) {
    const response = await fetch(`http://localhost:5001/v1/resources/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  //This function is used to delete a result from the ResultList
  function handleDelete(id) {
    const newDelete = resource.filter((resource) => resource.id !== id);
    setResource(newDelete);
    console.log(newDelete);
  }

  // used to get the resource table from the backend
  async function fetchResources() {
    const response = await fetch("http://localhost:5001/v1/resources");
    const data = await response.json();

    return data.rows;
  }

  //gets resource table onload
  useEffect(() => {
    async function setOnLoad() {
      const result = await fetchResources();
      setResource(result);
    }
    setOnLoad();
  }, []);

  // logic for initials badge
  const getInitials = function (name) {
    const fullName = name.split(" ");
    const initials = [];
    for (let i = 0; i < fullName.length; i++) {
      initials.push(fullName[i].charAt(0).toUpperCase());
    }

    return initials.join("");
  };

  return (
    <div className="App">
      <div className="bar">
        <figure>
          {" "}
          <img
            className="logo"
            src="images/sourcery-logo.png"
            alt="Logo"
            width="225"
            height="225"
          />{" "}
        </figure>
        <h1>Sourcery</h1>
      </div>
      <Navbar />

      <main>
        <div className="input-fields">
          <section>
            <h2>Add a resource below...</h2>
            <Input addResource={addResource} postResources={postResources} />
          </section>
        </div>
        <div className="input-cards">
          {" "}
          <Resources
            resource={resource}
            getInitials={getInitials}
            onLikeClick={onLikeClick}
            deleteResource={deleteResource}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
