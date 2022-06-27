import React from "react";
import "./Delete.css";

function Delete({ obj, deleteItem }) {
  return (
    <div className="button-spacing">
      <button
        className="delete-button"
        onClick={() => {
          deleteItem(obj);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Delete;
