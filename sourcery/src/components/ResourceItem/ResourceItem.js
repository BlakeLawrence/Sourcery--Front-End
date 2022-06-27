import React from "react";
import Likes from "../Likes";
import Delete from "../Delete/Delete";
import "./ResourceItem.css";

function ResourceItem({ getInitials, obj, onLikeClick, deleteItem }) {
  return (
    <div className="resource-card">
      <div className="name">
        <div className="initials">
          <span>{getInitials(obj.name)}</span>
        </div>
        <div className="name-padding">
          <strong>NAME</strong> {obj.name}
        </div>
        <div>
          <strong>URL</strong>{" "}
          <a href={obj.url} target="blank">
            Click Here
          </a>
        </div>
      </div>
      <div className="description">
        <div>
          {" "}
          <h3>DESCRIPTION</h3>
        </div>

        <p> {obj.description.toLowerCase()}</p>
      </div>
      <Likes obj={obj} onLikeClick={onLikeClick} />
      <Delete deleteItem={deleteItem} />
    </div>
  );
}

export default ResourceItem;
