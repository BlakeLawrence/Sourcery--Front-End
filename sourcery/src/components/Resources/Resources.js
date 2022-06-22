import React from "react";

import ResourceItem from "../ResourceItem/ResourceItem";

function Resources({ resource, getInitials, onLikeClick }) {
  return (
    <section>
      {resource.map((resources, index) => {
        return (
          <article key={index}>
            <ResourceItem
              state={resource}
              text={resources}
              getInitials={getInitials}
              index={index}
              onLikeClick={onLikeClick}
            />
          </article>
        );
      })}
    </section>
  );
}

export default Resources;
