import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
