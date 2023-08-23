import React from "react";

export const SmallPeopleListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      <p>
        Name: {name}, Age: {age} years
      </p>
    </div>
  );
};