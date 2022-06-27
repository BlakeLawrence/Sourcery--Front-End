import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";

function Resources({ resource, getInitials, onLikeClick, deleteItem }) {
  return (
    <section>
      {resource.map((resources, index) => {
        return (
          <article key={index}>
            <ResourceItem
              state={resource}
              obj={resources}
              getInitials={getInitials}
              index={index}
              onLikeClick={onLikeClick}
              deleteItem={deleteItem}
            />
          </article>
        );
      })}
    </section>
  );
}

export default Resources;
